import React from 'react';

const SidebarList = ({ title, items, activeIndex, onItemClick }) => {
  return (
    <div>
      <h4 className="clr-neutral-90 fs-24">{title}</h4>
      <ul className="list list-column gap-2 ps-5">
        {items.map((item, index) => (
          <li key={index}>
            <a
              href={`#${item.id}`}
              className={`link clr-neutral-80 fs-14 ${activeIndex === index ? '' : ''}`}
              onClick={() => onItemClick(index)}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarList;
