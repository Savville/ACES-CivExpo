### **Detailed Concept: CivExpo 2026 Transport Challenge**

### **Category: The \"Last Mile\" Mobility Challenge**

**Theme:** *Designing for People, Not Just Cars.*

The Narrative Challenge:

\"Green Hills University\" is located 3km off the main Nairobi-Nakuru
highway. The current access road is a disaster: a steep, dusty gravel
track that turns into a mudslide during the rains, cutting off access
for matatus and students. Inside the campus, it\'s chaotic---pedestrians
compete with cars on narrow roads, leading to accidents.

Teams must re-engineer this 3km link and the internal campus loop. The
goal isn\'t just a \"tarmac road\"; it\'s a **Mobility Corridor**. It
must safely accommodate the 2,000 students who walk from the junction,
the *boda-bodas*, and the campus shuttles, while handling the steep
terrain and heavy seasonal rains.

### **1. The Constraints (The Engineering Reality)**

#### **A. The External Access Road (3.0 km)**

-   **The \"Hill Climb\":** The road rises **80 meters** over 3km (avg
    > grade \~2.7%, but some sections are steeper).

-   **The River Crossing:** At Chainage 1+200, there is a seasonal river
    > bed (drift/culvert required).

-   **Right of Way (ROW):** Strictly limited to **20 meters** width. You
    > cannot demolish neighboring \"virtual\" farms.

-   **Soil:** Clayey subgrade (CBR 5%). Requires sub-base improvement or
    > stabilization.

#### **B. The Internal Campus Mobility**

-   **Modal Hierarchy:** Design **MUST** prioritize Pedestrians \>
    > Cyclists \> Public Transport \> Private Cars.

-   **NMT (Non-Motorized Transport):** Must include a dedicated 2.5m
    > wide walkway and 1.5m cycle lane separated from vehicle traffic.

-   **Safety:** Traffic calming measures (humps, raised crossings) are
    > mandatory near the \"virtual\" gate.

#### **C. Drainage & Sustainability**

-   **Stormwater:** The road acts as a dam against the hill.
    > Cross-drainage (culverts) must be placed every 300-500m.

-   **Paving Materials:** Penalties for using full-depth asphalt
    > concrete (too expensive). Encouraged: Cabro (interlocking blocks),
    > Chip seal, or Concrete strips for steep sections.

### **2. Simulated Survey Data (The \"Strip\" Survey)**

**Data Description:**

-   **Format:** Centerline Chainage every 100 meters.

-   **Geometry:** The road starts at the Main Highway (0+000), curves
    > left to avoid a hill, dips into a valley (River), and climbs
    > sharply to the Campus Gate (3+000).

#### **CSV Data for Brief**

**Instructions for Participants:**

> \"Save this as CivExpo2026_Road_Survey.csv. This data represents the
> **Existing Ground Level (EGL)** along the centerline of the proposed
> alignment. Use this to plot your Longitudinal Profile and design your
> Vertical Alignment (gradients/curves).\"\
> **CSV Points provided**

### **3. Visualization of the Alignment**

I will generate a plot showing the **Plan View (Route)** and the
**Profile View (Elevation)** so you can see the \"S-shape\" curve and
the \"Valley-Dip\" that makes the engineering interesting.

### **4. Judging Criteria**

  -----------------------------------------------------------------------
  **Criteria**            **Weighting**           **What Judges Look
                                                  For**
  ----------------------- ----------------------- -----------------------
  **Geometric Design**    30%                     Is the alignment safe?
                                                  Did they smooth out the
                                                  steep gradients
                                                  (cut/fill)? Are
                                                  horizontal curves
                                                  super-elevated
                                                  (banked)?

  **NMT Integration**     25%                     Is the pedestrian path
                                                  safe or an
                                                  afterthought? Are there
                                                  crossings?

  **Drainage Strategy**   20%                     How do they handle the
                                                  river crossing (bridge
                                                  vs. box culvert)? Side
                                                  drains?

  **Pavement Design**     15%                     Correct material choice
                                                  for the CBR 5% soil
                                                  (e.g., using a capping
                                                  layer). Cost-effective
                                                  surfacing.

  **Innovation**          10%                     Solar street lights,
                                                  permeable paving for
                                                  parking, local
                                                  materials.
  -----------------------------------------------------------------------

### **5. Recommended Student Workflow (Brief)**

1.  **Plotting:** Import points to Excel/Civil3D to visualize the
    > existing ground.

2.  **Horizontal Alignment:** Smooth the sharp turns in the X-Y
    > coordinates.

3.  **Vertical Alignment:** Design a \"Proposed Road Level\" (Red Line)
    > on the profile that avoids 10% gradients but minimizes earthworks
    > (balancing Cut & Fill).

4.  **Cross-Section Design:** Draw a standard cross-section showing:
    > \[Drain\] \[Walkway\] \[Verge\] \[Carriageway\] \[Verge\] \[Cycle
    > Lane\].

5.  **Report:** Justify why you chose a Culvert over a Bridge (Cost vs.
    > Flow).
