import React,{useState} from 'react'
// const History = () => {
//   return (
    // <div>
    //     Approval history
    // </div>
    const History = () => {
        const [approvalClicked, setApprovalClicked] = useState(false);
        const [complaintClicked, setComplaintClicked] = useState(false);
      
        const handleApprovalClick = () => {
          setApprovalClicked(true);

        };
      
        const handleComplaintClick = () => {
          setComplaintClicked(true);
        };
      
        return (
          <>
            <div onClick={handleApprovalClick} style={{ cursor: 'pointer' }}>
              {approvalClicked ? 'Approval history clicked!' : 'Approval History'}
            </div>
            <div onClick={handleComplaintClick} style={{ cursor: 'pointer' }}>
              {complaintClicked ? 'Complaint history clicked!' : 'Complaint History'}
            </div>
          </>
        );
      };
    
//   )
// }
export default History;