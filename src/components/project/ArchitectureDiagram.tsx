export default function ArchitectureDiagram() {
  return (
    <div className="cs-diagram">
      <svg viewBox="0 0 920 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          className="cs-flow-path"
          d="M140 100 H280"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          className="cs-flow-path"
          d="M420 100 H560"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          className="cs-flow-path"
          d="M700 100 H780"
          stroke="currentColor"
          strokeWidth="1.5"
        />

        <circle
          r="3.5"
          fill="var(--accent)"
          className="cs-flow-dot"
          style={{ offsetPath: "path('M140 100 H280')" }}
        />
        <circle
          r="3.5"
          fill="var(--accent)"
          className="cs-flow-dot cs-flow-dot--delay-1"
          style={{ offsetPath: "path('M420 100 H560')" }}
        />
        <circle
          r="3.5"
          fill="var(--accent)"
          className="cs-flow-dot cs-flow-dot--delay-2"
          style={{ offsetPath: "path('M700 100 H780')" }}
        />

        <rect
          x="20"
          y="68"
          width="120"
          height="64"
          rx="10"
          className="cs-diagram-node"
        />
        <text
          x="80"
          y="95"
          textAnchor="middle"
          className="cs-diagram-text"
          fontSize="11"
          fontWeight="500"
        >
          React App
        </text>
        <text
          x="80"
          y="112"
          textAnchor="middle"
          className="cs-diagram-text-faint"
          fontSize="9"
        >
          TanStack
        </text>

        <rect
          x="280"
          y="60"
          width="140"
          height="80"
          rx="10"
          className="cs-diagram-node cs-diagram-node--accent"
        />
        <text
          x="350"
          y="92"
          textAnchor="middle"
          className="cs-diagram-text"
          fontSize="11"
          fontWeight="500"
        >
          FastAPI
        </text>
        <text
          x="350"
          y="108"
          textAnchor="middle"
          className="cs-diagram-text-faint"
          fontSize="9"
        >
          Catalog API
        </text>
        <text
          x="350"
          y="122"
          textAnchor="middle"
          className="cs-diagram-text-faint"
          fontSize="9"
        >
          genre boost/malus
        </text>

        <rect
          x="560"
          y="52"
          width="140"
          height="96"
          rx="10"
          className="cs-diagram-node"
        />
        <text
          x="630"
          y="84"
          textAnchor="middle"
          className="cs-diagram-text"
          fontSize="11"
          fontWeight="500"
        >
          Elasticsearch
        </text>
        <text
          x="630"
          y="100"
          textAnchor="middle"
          className="cs-diagram-text-faint"
          fontSize="9"
        >
          vecteurs 384d
        </text>
        <text
          x="630"
          y="114"
          textAnchor="middle"
          className="cs-diagram-text-faint"
          fontSize="9"
        >
          sentence-transf.
        </text>
        <text
          x="630"
          y="128"
          textAnchor="middle"
          className="cs-diagram-text-accent"
          fontSize="9"
        >
          kNN search
        </text>

        <rect
          x="780"
          y="68"
          width="120"
          height="64"
          rx="10"
          className="cs-diagram-node cs-diagram-node--highlight"
        />
        <text
          x="840"
          y="95"
          textAnchor="middle"
          className="cs-diagram-text-accent"
          fontSize="11"
          fontWeight="500"
        >
          Reco.
        </text>
        <text
          x="840"
          y="112"
          textAnchor="middle"
          className="cs-diagram-text-dim"
          fontSize="9"
        >
          personnalisée
        </text>
      </svg>
      <div className="cs-diagram-caption">
        <span>Flux de recommandation</span>
        <span>384 dimensions · recherche kNN</span>
      </div>
    </div>
  );
}
