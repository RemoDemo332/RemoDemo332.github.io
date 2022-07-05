import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import * as BsIcons from "react-icons/bs";
import "./JobTable.css";
import Checkbox from "@mui/material/Checkbox";
import { green } from "@mui/material/colors";

function JobTableInactive() {
  return (
    <Box
      sx={{
        display: "flex",
        "& > :not(style)": {
          m: 1,
          width: 518,
          height: 200,
          border: "1px solid black",
        },
      }}
    >
      <Paper variant="outlined">
        <table
          className="inactiveTable"
          width="101%"
          height="101%"
          border="1px solid black"
        >
          <tbody>
            <tr>
              <td rowSpan="4" bgcolor="#ea3c53">
                <div id="dragtab">
                  <BsIcons.BsThreeDotsVertical />
                </div>
              </td>
              <td>JOB</td>
              <td>OP</td>
              <td>START</td>
              <td>QTY</td>
              <td>TOOLKIT</td>
            </tr>
            <tr>
              <td>DATA</td>
              <td rowSpan="3">DATA</td>
              <td>DATA</td>
              <td>DATA</td>
              <td>
                <Checkbox
                  sx={{
                    color: "#ea3c53",
                    "&.Mui-checked": { color: green[600] },
                  }}
                  size="small"
                />
              </td>
            </tr>
            <tr>
              <td>PART ID</td>
              <td>END</td>
              <td>PACKET</td>
              <td>MATERIAL</td>
            </tr>
            <tr>
              <td>DATA</td>
              <td>DATA</td>
              <td>
                <Checkbox
                  sx={{
                    color: "#ea3c53",
                    "&.Mui-checked": { color: green[600] },
                  }}
                  size="small"
                />
              </td>
              <td>
                <Checkbox
                  sx={{
                    color: "#ea3c53",
                    "&.Mui-checked": { color: green[600] },
                  }}
                  size="small"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </Paper>
    </Box>
  );
}

export default JobTableInactive;
