import { useState } from 'react';
import SidebarList from '../sidebarList/SidebarList';

const FeaturedSidebar = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="col-lg-2">
      <div className="feature-sidebar-list" id="featured-block-list">
        <SidebarList 
          title="AI Basic" 
          items={[
            { id: 'featured-block-1', label: 'Planning' },
            { id: 'featured-block-2', label: 'Progress' },
            { id: 'featured-block-3', label: 'Collaborate' },
          ]}
          activeIndex={activeIndex}
          onItemClick={handleItemClick}
        />
        <SidebarList 
          title="Advanced" 
          items={[
            { id: 'featured-block-4', label: 'Data Analysis' },
            { id: 'featured-block-5', label: 'Codebase' },
            { id: 'featured-block-6', label: 'Secure' },
          ]}
          activeIndex={activeIndex}
          onItemClick={handleItemClick}
        />
      </div>
    </div>
  );
};

export default FeaturedSidebar;