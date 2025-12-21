´´´mermaid
%%{init: {"flowchart": {"htmlLabels": false, "curve": "basis", "nodeSpacing": 60, "rankSpacing": 70}} }%%
flowchart LR
  A[Webhook trigger]:::trigger --> B[Validate input]:::process

  %% Continuous-looking arrows: line (---) then arrow (-->)
  B --- V[OK]:::edgeLabel --> C[200 OK · JSON]:::success
  B --- X[Missing name]:::edgeLabel --> D[400 Bad Request · JSON]:::error

  %% Node styling
  classDef trigger fill:#EEF2FF,stroke:#6366F1,stroke-width:2px,color:#111827,rx:12,ry:12;
  classDef process fill:#FFFFFF,stroke:#94A3B8,stroke-width:2px,color:#111827,rx:12,ry:12;
  classDef success fill:#ECFDF5,stroke:#10B981,stroke-width:2px,color:#064E3B,rx:12,ry:12;
  classDef error   fill:#FEF2F2,stroke:#EF4444,stroke-width:2px,color:#7F1D1D,rx:12,ry:12;

  %% “Text only” labels (no shape)
  classDef edgeLabel fill:transparent,stroke:transparent,color:#334155,font-size:12px;

  %% Ensure label nodes render as just text
  style V fill:transparent,stroke:transparent
  style X fill:transparent,stroke:transparent

  %% Color the two paths (optional)
  linkStyle 1 stroke:#10B981,stroke-width:2px;
  linkStyle 3 stroke:#EF4444,stroke-width:2px;
´´´
