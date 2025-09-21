import React from 'react';
import './TopNotificationTable.css';

const TopNotificationTable = ({ notificationList }) => {
  return (
    <div className="container top-notification-table">
      <table>
        <tbody>
          <tr>
            {notificationList && notificationList.length > 0 ? (
              notificationList.slice(0, 4).map((notification, index) => (
                <td key={index} className="table-dt">
                  <a href={notification.href} target="_blank" rel="noopener noreferrer">
                    {notification.title}
                  </a>
                </td>
              ))
            ) : (
              // Fallback content when no data is available
              <>
                <td className="table-dt">
                  <a href="https://www.sarkariresult.com/upsc/upsc-otr-registration/">
                    UPSC OTR 2022 Registration
                  </a>
                </td>
                <td className="table-dt">
                  <a href="https://www.sarkariresult.com/ssc/ssc-cpo-si-2022/">
                    SSC CPO SI 2023 Apply Online
                  </a>
                </td>
                <td className="table-dt">
                  <a href="https://www.sarkariresult.com/2022/army-agniveer-rally/">
                    Army Agniveer Apply Online
                  </a>
                </td>
                <td className="table-dt">
                  <a href="https://www.sarkariresult.com/ssc/ssc-junior-engineer-je-2022/">
                    SSC Junior Engineer Apply Online
                  </a>
                </td>
              </>
            )}
          </tr>
          <tr>
            {notificationList && notificationList.length > 4 ? (
              notificationList.slice(4, 8).map((notification, index) => (
                <td key={index + 4} className="table-dt">
                  <a href={notification.href} target="_blank" rel="noopener noreferrer">
                    {notification.title}
                  </a>
                </td>
              ))
            ) : (
              // Fallback content for second row when no data is available
              <>
                <td className="table-dt">
                  <a href="https://www.sarkariresult.com/force/coast-guard-ac-02-2023/">
                    Coast Guard AC Apply Online
                  </a>
                </td>
                <td className="table-dt">
                  <a href="https://www.sarkariresult.com/upsssc/upsssc-mukhya-sevika-05-22/">
                    Apply Online UPSSSC Mukhya Sevika Apply Online
                  </a>
                </td>
                <td className="table-dt">
                  <a href="https://www.sarkariresult.com/ssc/ssc-stenographer-2022/">
                    SSC Stenographer 2022 Apply Online
                  </a>
                </td>
                <td className="table-dt">
                  <a href="https://www.sarkariresult.com/2022/railway-group-d-admit-card/">
                    Railway Group D Exam City / Admit Card
                  </a>
                </td>
              </>
            )}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TopNotificationTable;
