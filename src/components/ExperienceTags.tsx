import { useCallback, useEffect, useRef, useState } from "react";

type ExperienceTagsProps = {
  tags: string[];
  onLayoutChange?: () => void;
};

export default function ExperienceTags({
  tags,
  onLayoutChange,
}: ExperienceTagsProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState(false);
  const [grabbing, setGrabbing] = useState(false);
  const [atEnd, setAtEnd] = useState(false);
  const [hasOverflow, setHasOverflow] = useState(false);
  const [hiddenCount, setHiddenCount] = useState(0);
  const dragRef = useRef({ isDown: false, startX: 0, startScroll: 0 });
  const expandedMountedRef = useRef(false);

  const updateMask = useCallback(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const overflowing = scroller.scrollWidth > scroller.clientWidth + 2;
    const scrollAtEnd =
      scroller.scrollLeft + scroller.clientWidth >= scroller.scrollWidth - 2;

    setHasOverflow(overflowing);
    setAtEnd(!overflowing || scrollAtEnd || expanded);

    if (!expanded && overflowing) {
      const containerRight = scroller.clientWidth;
      const tagEls = scroller.querySelectorAll<HTMLElement>(".exp-tag");
      let hidden = 0;

      tagEls.forEach((el) => {
        if (el.offsetLeft + el.offsetWidth > containerRight + 2) hidden++;
      });

      setHiddenCount(hidden);
    } else {
      setHiddenCount(0);
    }
  }, [expanded]);

  useEffect(() => {
    updateMask();

    const scroller = scrollerRef.current;
    if (!scroller) return;

    const observer = new ResizeObserver(updateMask);
    observer.observe(scroller);

    return () => observer.disconnect();
  }, [tags, expanded, updateMask]);

  useEffect(() => {
    if (!expandedMountedRef.current) {
      expandedMountedRef.current = true;
      return;
    }
    onLayoutChange?.();
  }, [expanded, onLayoutChange]);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const onMouseDown = (e: MouseEvent) => {
      if (expanded) return;
      dragRef.current = {
        isDown: true,
        startX: e.pageX,
        startScroll: scroller.scrollLeft,
      };
      setGrabbing(true);
    };

    const onMouseUp = () => {
      dragRef.current.isDown = false;
      setGrabbing(false);
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!dragRef.current.isDown) return;
      e.preventDefault();
      scroller.scrollLeft =
        dragRef.current.startScroll - (e.pageX - dragRef.current.startX);
    };

    const onWheel = (e: WheelEvent) => {
      if (expanded) return;
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        scroller.scrollLeft += e.deltaY;
        e.preventDefault();
      }
    };

    scroller.addEventListener("mousedown", onMouseDown);
    scroller.addEventListener("scroll", updateMask);
    scroller.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("resize", updateMask);

    return () => {
      scroller.removeEventListener("mousedown", onMouseDown);
      scroller.removeEventListener("scroll", updateMask);
      scroller.removeEventListener("wheel", onWheel);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", updateMask);
    };
  }, [expanded, updateMask]);

  const toggleExpanded = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      setExpanded((prev) => !prev);
    },
    [],
  );

  const scrollerClass = [
    "exp-tags-scroll",
    expanded ? "expanded" : "",
    atEnd ? "at-end" : "",
    grabbing ? "grabbing" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="exp-tags-zone">
      <div ref={scrollerRef} className={scrollerClass}>
        {tags.map((tag) => (
          <span key={tag} className="exp-tag">
            {tag}
          </span>
        ))}
        {(hasOverflow || expanded) && (
          <button
            type="button"
            className="exp-tags-more"
            onClick={toggleExpanded}
          >
            {expanded ? "réduire" : `+ ${hiddenCount}`}
          </button>
        )}
      </div>
    </div>
  );
}
