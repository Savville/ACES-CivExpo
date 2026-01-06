## **Detailed Concept: CivExpo 2026 Structures Challenge**

### **Category: The Hillside Hostel Design Challenge**

**Theme:** *Adapting to Terrain: Affordable & Resilient Housing on
Challenging Sites.*

The Narrative Challenge:

In Kenya, prime flat land is becoming expensive and scarce. Universities
and developers are increasingly forced to build on \"marginal\"
land---slopes, hillsides, and undulating terrain. The challenge is no
longer just designing a building; it is designing a building that sits
lightly on the land.

Teams must design a 1000-student hostel on a **sloping site (approx. 1
acre)**. The design must minimize excavation costs (cut and fill),
manage stormwater runoff from the hill, and ensure accessibility
(ramps/paths) for students despite the elevation changes.

### **1. The Constraints (\"Not Easy, Not Hard\")**

These constraints are designed to force students to use Civil
Engineering principles (grading, foundations, drainage) rather than just
Architectural drafting.

#### **A. Site & Earthworks Constraints**

-   **The \"Zero-Export\" Rule:** You may cut and fill the land to
    > create flat terraces, but **no soil can leave the site**. Any soil
    > excavated must be used elsewhere on the site for landscaping or
    > leveling (Cut \$\\approx\$ Fill balance).

-   **Retaining Wall Limit:** Retaining walls cannot exceed **3.0
    > meters** in height at any single point. If the slope requires
    > more, the building must be \"stepped\" or terraced down the hill.

-   **Foundation Steps:** The foundation levels must step with the
    > slope. A massive single flat slab is penalized unless the cost
    > benefit analysis proves it is cheaper than stepping.

#### **B. Structural Constraints**

-   **Max Height:** G+7 (8 storeys).

-   **Structural Grid:** Must be modular to allow for cost-effective
    > mass production, even as the building steps down the hill.

-   **Materials:** Must use **local masonry units** (e.g., Interlocking
    > Stabilized Soil Blocks - ISSB) for infill. Concrete use is
    > restricted to structural frame (columns/beams/slabs) only.

-   **Seismic:** Zone II (Nairobi Region).

#### **C. Habitability & Drainage Constraints**

-   **Runoff Management:** Since the site is hilly, the design must show
    > how rainwater from the higher ground is diverted *around* or
    > *under* the building to prevent flooding the lower rooms.

-   **Accessibility:** Despite the slope, the main entrance and at least
    > 20% of the ground floor must be wheelchair accessible via ramps
    > (max slope 1:12), not just stairs.

### **2. The Simulated Survey Points (The \"Hilly\" Dataset)**

**Site Description:**

-   **Dimensions:** Roughly 60m × 70m
    > rectangular plot (4,200 m² / ≈ 1.04
    > acres).

-   **Topography:** The site slopes downwards from the **North-West
    > corner (Highest)** to the **South-East corner (Lowest)**.

-   **Variation:** There is a slight \"valley\" or depression running
    > through the middle, meaning the slope isn\'t a perfect flat
    > plane---it undulates.

**Instructions for Students:**

> \"The following points represent a grid survey taken at 10-meter
> intervals. Point \$(0,0)\$ is the South-West corner. Use these points
> to generate your site contours in Revit/ArchiCAD/Civil3D. You must
> place your building within these boundaries.\"

#### **Survey Data Table (Simulated)**

*All units in Meters. Datum Elevation starts at 1600.00m ASL (typical
Nairobi).*

  --------------------------------------------------------------------------
  **Point ID**   **Easting      **Northing     **Elevation    **Notes**
                 (X)**          (Y)**          (Z)**          
  -------------- -------------- -------------- -------------- --------------
  **ROW 1**      **(South                                     
                 Edge)**                                      

  P-01           0.00           0.00           1601.50        SW Corner
                                                              (Lower Mid)

  P-02           10.00          0.00           1601.20        

  P-03           20.00          0.00           1600.80        

  P-04           30.00          0.00           1600.40        

  P-05           40.00          0.00           1600.10        

  P-06           50.00          0.00           1599.80        

  P-07           60.00          0.00           1599.50        SE Corner
                                                              (Lowest Point)

  **ROW 2**      **(10m                                       
                 North)**                                     

  P-08           0.00           10.00          1602.20        

  P-09           20.00          10.00          1601.40        Slight
                                                              depression
                                                              starts

  P-10           40.00          10.00          1600.60        

  P-11           60.00          10.00          1600.00        

  **ROW 3**      **(20m                                       
                 North)**                                     

  P-12           0.00           20.00          1603.00        

  P-13           30.00          20.00          1601.80        Valley bottom

  P-14           60.00          20.00          1600.80        

  **ROW 4**      **(30m                                       
                 North)**                                     

  P-15           0.00           30.00          1603.80        

  P-16           30.00          30.00          1602.50        

  P-17           60.00          30.00          1601.50        

  **ROW 5**      **(40m                                       
                 North)**                                     

  P-18           0.00           40.00          1604.50        

  P-19           30.00          40.00          1603.20        Steeper
                                                              section

  P-20           60.00          40.00          1602.20        

  **ROW 6**      **(50m                                       
                 North)**                                     

  P-21           0.00           50.00          1605.20        

  P-22           30.00          50.00          1604.00        

  P-23           60.00          50.00          1603.00        

  **ROW 7**      **(North                                     
                 Edge)**                                      

  P-24           0.00           60.00          1606.00        NW Corner
                                                              (Highest
                                                              Point)

  P-25           20.00          60.00          1605.50        

  P-26           40.00          60.00          1604.80        

  P-27           60.00          60.00          1604.00        NE Corner
  --------------------------------------------------------------------------

#### **Terrain Analysis for the Student:**

1.  **Highest Point:** NW Corner (1606.0m)

2.  **Lowest Point:** SE Corner (1599.5m)

3.  **Total Drop:** 6.5 meters across the diagonal.

4.  **Challenge:** This is a **10% average slope** across the diagonal.
    > A 60-meter long building cannot sit flat; the foundation at one
    > end would be 6 meters in the air if the other end is at ground
    > level. They *must* step the building.

### **3. Judging Criteria Specific to this Terrain**

  -----------------------------------------------------------------------
  **Criteria**            **Weighting**           **What Judges Look
                                                  For**
  ----------------------- ----------------------- -----------------------
  **Topographic           25%                     Did they step the
  Response**                                      building down the hill?
                                                  Did they avoid
                                                  excessive retaining
                                                  walls? Is the cut/fill
                                                  balanced?

  **Structural            25%                     Is the column layout
  Efficiency**                                    simple despite the
                                                  stepped foundation? Did
                                                  they choose appropriate
                                                  footings for a slope?

  **Water Management**    15%                     Is there a clear plan
                                                  for diverting the
                                                  \"uphill\" rainwater
                                                  around the hostel?

  **Sustainability &      20%                     Low embodied carbon
  Cost**                                          materials. Cost per bed
                                                  is minimized.

  **Presentation**        15%                     Quality of the 3D
                                                  visualizations showing
                                                  the building *on the
                                                  slope* (not floating in
                                                  space).
  -----------------------------------------------------------------------
