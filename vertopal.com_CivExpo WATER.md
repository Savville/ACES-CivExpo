## **Detailed Concept: CivExpo 2026 Water Resources Challenge**

### **Category: The \"Zero-Day\" Campus Challenge**

**Theme:** *Every Drop Counts: Engineering Resilience Against Scarcity.*

The Narrative Challenge:

The fictional \"Upland University\" faces a chronic water crisis. The
municipal supply is erratic (rationed to 3 days a week), and the
existing borehole is saline and over-pumped. During the dry season
(Jan-Feb), the campus often closes due to sanitation failures.

Teams must design a **Climate-Resilient Water System** that integrates:

1.  **Harvesting:** Capturing the intense rainfall of the wet season.

2.  **Storage:** Buffering against the \"dry days.\"

3.  **Distribution:** Delivering water via gravity to all campus zones
    > with adequate pressure (1.5 bar - 5 bar).

4.  **Reuse:** Treating wastewater for irrigation to save potable water.

### **1. The Constraints (The \"Goldilocks\" Difficulty)**

These constraints force students to perform mass balance calculations
(Supply vs. Demand) and hydraulic analysis, rather than just drawing
pipes.

#### **A. The Supply Constraint (The \"Scarcity\" Factor)**

-   **Municipal Supply:** Available only **3 days/week** (Mon, Wed, Fri)
    > for 8 hours/day. Pressure at intake is 2.0 bar.

-   **Borehole:** Maximum yield is capped at 15 m³/hour. It cannot run 24/7 (max 16 hours/day to
    > allow recharge).

-   **Rainwater:** Rainfall is seasonal (see data below). Students must
    > size storage tanks to bridge the gap between the \"Long Rains\"
    > and the \"Dry Season.\"

#### **B. The Network Constraints (EPANET Rules)**

-   **Gravity First:** The campus is on a slope. Teams must place the
    > Main Storage Tank at the **Highest Point** (NE Corner) and the
    > Wastewater Treatment Plant (WWTP) at the **Lowest Point** (SW
    > Corner) to utilize gravity.

-   **Pressure Limits:**

    -   Minimum Pressure at any tap: **10m head (1 bar)**.

    -   Maximum Pressure: **50m head (5 bar)** (to prevent pipe bursts).

-   **Velocity:** Water velocity in pipes must be between **0.6 m/s** (to prevent sedimentation) and **2.0 m/s** (to prevent scour).

#### **C. The Sustainability Constraint (The \"Circular\" Goal)**

-   **Reuse Mandate:** Flush toilets and landscaping (Sports Field)
    > **MUST** use treated wastewater (greywater/blackwater) or
    > harvested rainwater. They cannot use potable municipal/borehole
    > water.

-   **Zero Discharge:** No wastewater can leave the campus boundary. It
    > must be treated and infiltrated or reused.

### **2. Simulated Data Sets (for the Brief)**

Since this is a network design, I have provided **Key Nodes**
(Buildings) rather than a dense grid. Students connect these nodes with
pipes.

#### **Dataset A: Campus Topography & Nodes (CSV)**

-   **Site Context:** A 500m × 500m section of
    > the campus.

-   **Terrain:** Slopes from **North-East (High)** to **South-West
    > (Low)**. Total drop: **25 meters**.

**CSC Points provided**

*(Note: Demand is in Liters Per Second - LPS. This sums to \~12.5 LPS
peak, which matches the \~1.3 MLD daily average when adjusted for peak
factors).*

#### **Dataset B: Simulated Rainfall (Nairobi Typical)**

-   **Challenge:** Students must calculate how big their tank needs to
    > be to capture the April rain and save it for the July dry spell.

  -----------------------------------------------------------------------------------------------------------------------------------
  **Month**   **Jan**   **Feb**   **Mar**   **Apr**   **May**   **Jun**   **Jul**   **Aug**   **Sep**   **Oct**   **Nov**   **Dec**
  ----------- --------- --------- --------- --------- --------- --------- --------- --------- --------- --------- --------- ---------
  **Rain      40        35        110       220       180       45        15        20        30        140       160       90
  (mm)**                                                                                                                    

  -----------------------------------------------------------------------------------------------------------------------------------

-   **Catchment Area:** Assume total roof area available for harvesting
    > is **15,000 m²**.

### **3. Judging Criteria**

  -----------------------------------------------------------------------
  **Criteria**            **Weighting**           **What Judges Look
                                                  For**
  ----------------------- ----------------------- -----------------------
  **Hydraulic             30%                     Does the EPANET model
  Functionality**                                 work? Are pressures
                                                  within limits (10-50m)?
                                                  No negative pressures?

  **Resilience Strategy** 25%                     Did they size the
                                                  storage tank correctly
                                                  using the rainfall
                                                  data? Can they survive
                                                  a week without
                                                  municipal water?

  **Sustainability        20%                     Is the \"Purple Pipe\"
  (Reuse)**                                       (wastewater reuse)
                                                  system separate? Are
                                                  they reusing at least
                                                  40% of water?

  **Cost Efficiency**     15%                     Did they avoid
                                                  unnecessary pumping?
                                                  (Gravity systems score
                                                  higher).

  **Innovation**          10%                     Smart metering, leak
                                                  detection ideas, or
                                                  novel filtration
                                                  methods.
  -----------------------------------------------------------------------

### **4. Recommended Student Workflow (To put in the brief)**

1.  **Mass Balance (Excel):** Calculate total demand vs. total available
    > supply (Rain + Borehole + Muni). Determine the deficit.

2.  **Storage Sizing:** Use the \"Ripple Method\" or cumulative flow
    > curve in Excel to size the main tank based on the rainfall
    > variation.

3.  **Network Design (EPANET):**

    -   Import the Node Coordinates (Dataset A).

    -   Draw pipes connecting the Main Tank (J-01) to all demand nodes.

    -   Assign elevations and demands.

    -   Run the simulation to check for pressure violations.

4.  **Optimization:** Adjust pipe diameters to manage velocity and
    > friction loss.

### Technical Note for Students (To include in Brief)

> **Key Assumptions for Modeling:**

-   **Coordinate Units:** Meters.

-   **Base Demand:** The values in the CSV are *average* demands in
    > Liters Per Second (LPS). You must apply a **Peak Factor of 3.0**
    > when testing your pipe pressures.

-   **Reuse Node (J-08):** The Sports Field demand (2.0 LPS) should NOT
    > be drawn from the potable water tank. It must be supplied by your
    > designed wastewater treatment or raw rainwater line.
