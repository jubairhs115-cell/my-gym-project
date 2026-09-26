 import React from 'react';
import SaveCompoPage from '../savecompo/page';
import SavePlanPage from '../plancompo/page';
 
 const SelectiveTabs = () => {
    return (
        <div>
            {/* name of each tab group should be unique */}
<div className="tabs tabs-lift tabs-bottom">
  <input type="radio" name="my_tabs_5" className="tab" aria-label="plan" />
  <div className="tab-content bg-base-100 border-base-300 p-6"><SavePlanPage></SavePlanPage></div>

  <input type="radio" name="my_tabs_5" className="tab" aria-label="saved" defaultChecked />
  <div className="tab-content bg-base-100 border-base-300 p-6"><SaveCompoPage/></div>
 
</div>
        </div>
    );
 };
 
 export default SelectiveTabs;