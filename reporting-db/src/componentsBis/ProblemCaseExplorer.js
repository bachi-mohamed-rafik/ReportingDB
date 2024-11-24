import React from 'react';
import { useProblemContext } from './ProblemContext';
import CaseStats from './CaseStats';
import ProblemCaseExplorerTable from './ProblemCaseExplorerTable';
// this component ProblemCaseExplorer is the child of Problem Component 
// in ProblemOverview component o click on a button will fetch  data and map it in this component 

// ProbleCaseExplorer component is divided to two components CaseStats and ProblemCaseExplorerTable
const ProblemCaseExplorer = () => {
  const { problemData } = useProblemContext(); // Access the data
  console.log("problemData: ",{ problemData })

  return (
  <div>
      <div>
      {problemData ? (
        <div>
          {/* Render the fetched data */}
          <CaseStats stat={problemData.length} />
          <ProblemCaseExplorerTable problemData= { problemData }/>
        </div>
      ) : (
        <p> </p>
      )}
    </div>
    </div>
  )
}

export default ProblemCaseExplorer