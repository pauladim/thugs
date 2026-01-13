import React from 'react';
import Free20 from './Free20';
import StreetGallery from './StreetGallery';
import ProjectOverview from './ProjectOverview';
import ProjectDetails from './ProjectDetails';
import FundingOutcomes from './FundingOutcomes';
import './DrugFree20Container.css';

const DrugFree20 = () => {
  return (
    <div className="drugfree20-container">
      <Free20 />
      <StreetGallery />
      <ProjectOverview />
      <ProjectDetails />
      <FundingOutcomes />
    </div>
  );
};

export default DrugFree20;