import React, { useState, useEffect } from "react";
import Dynamsoft from "dwt";

const DWT = () => {
  const [DWObject, setDWObject] = useState(null);
  const containerId = "dwtcontrolContainer";

  useEffect(() => {
    Dynamsoft.DWT.RegisterEvent("OnWebTwainReady", Dynamsoft_OnReady);
    Dynamsoft.DWT.ProductKey =
      "t0186SwUAALZ7LEknBpaTXvUEU1voTVpqWIAbq0mylEg7rA5daNfovfoFfiS+i26fwwFyV1HM4VqpT3juVJB8kz49zZFGIMa6Z/coaaWNVq9rcdb2aKLl2KQJcrVawK3hGOdv1tQlRwLwWgHdF2QHmAKxnAx46/ZbMhwAqQFaAWKni8DXIs9TW+JT1/Bre1F0SgOn3u9MN/YeZ7qu/zr9rvohmlnBKQJMp3wApAZoBYgNOAAjLdww2A/7IQui";
    Dynamsoft.DWT.ResourcesPath = "/dwt-resources";
    Dynamsoft.DWT.Containers = [
      {
        WebTwainId: "dwtObject",
        ContainerId: containerId,
        Width: "300px",
        Height: "400px",
      },
    ];
    Dynamsoft.DWT.Load();

    return () => Dynamsoft.DWT.Unload();
  }, []);

  const Dynamsoft_OnReady = () => {
    setDWObject(Dynamsoft.DWT.GetWebTwain(containerId));
  };

  function RemoveAllImages() {
    console.log('remove')
   setDWObject(setDWObject(null))
   Dynamsoft.DWT.Load();
}

  const acquireImage = () => {
    if (DWObject) {
      DWObject.SelectSourceAsync()
        .then(() => {
          return DWObject.AcquireImageAsync({
            IfDisableSourceAfterAcquire: true,
          });
        })
        .then((result) => {
          console.log(result);
        })
        .catch((exp) => {
          console.error(exp.message);
        })
        .finally(() => {
          DWObject.CloseSourceAsync().catch((e) => {
            console.error(e);
          });
        });
    }
  };

  function SaveWithFileDialog() {
    if (DWObject) {
        if (DWObject.HowManyImagesInBuffer > 0) {
            DWObject.IfShowFileDialog = true;
            DWObject.SaveAllAsPDF("DynamicWebTWAIN.pdf", OnSuccess, OnFailure);
        }
    }
}
function OnSuccess() {
    console.log('successful');
}

function OnFailure(errorCode, errorString) {
    if(errorCode !== -2326)
    alert(errorString);
}

  return (
    <>
      <div className="grid-container">
        <div className="grid-item">
          <div className="image-container" id={containerId}></div>
        </div>

        <div className="grid-item">
          <label htmlFor="scaners">Select a Source:</label>
          <select id="scaners">
            <option value="TWAIN2 FreeImage Software Scanner">
              TWAIN2 FreeImage Software Scanner
            </option>
            <option value="Twain64-TWAIN2 FreeImage Software">
              Twain64-TWAIN2 FreeImage Software
            </option>
          </select>
          <br />
          <br />
          <input type="checkbox" id="ui" name="ui" />
          <label htmlFor="ui">Show UI</label>
          <input type="checkbox" id="auto" name="auto" />
          <label htmlFor="auto"> Auto Feeder</label>

          <br />
          <br />
          <p>Pixel Type:</p>
          <input type="radio" id="black" name="colorType" value="black" />
          <label htmlFor="black">Black & white</label>
          <br />
          <input type="radio" id="grey" name="colorType" value="grey" />
          <label htmlFor="grey">Grey</label>
          <br />
          <input type="radio" id="color" name="colorType" value="color" />
          <label htmlFor="color">Color</label>

          <br />
          <br />

          <label htmlFor ="Resolution">Resolution</label>
          <select id="Resolution">
            <option value="100px">100px</option>
            <option value="200px">200px</option>
          </select>
          <br />
          <br />
          <button onClick={acquireImage}>Scan</button>
          <br />
          <br />
          <button onClick={SaveWithFileDialog}>Save</button>
          <br />
          <br />
          <input
            type="button"
            value="Remove Blank Images"
            onClick={acquireImage}
          />
          <br />
          <br />

          <button
            onClick={RemoveAllImages}
          >Remove All Images</button>
          <br />
          <br />
        </div>
      </div>
    </>
  );
};

export default DWT;
