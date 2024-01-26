// import React , {useState} from "react";



// function UploadForm() {

//      const [inputvalues, setInputvalues] = useState({
//         file:"",
//         captions:"",
//         socialMedia : {
//         facebook:false,
//         instagram:false,
//         linkedin:false
//         }
//      })
//    const {file, captions, socialMedia} = inputvalues;

//   const handleOnChnage = (e) => {
//     const {name, value, type, checked } = e.target;

//      if(type === checked){
//             setInputvalues({
//                 ...inputvalues,
//                 socialMedia:{
//                     ...socialMedia,
//                     [name]:checked
//                 }
//             })
//      }
//      else{
//     setInputvalues({
//         ...inputvalues,
//         [name]:value
//     })
// }

//   } // handleonchange

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Entered values are",inputvalues)
//   }

//     return(
//         <div>
//             <h1>
//                 upload File Form
//             </h1>
//             <div className="formcomponent">
//                 <form onSubmit={handleSubmit}>
//                   <label htmlFor="selectfile">Upload File : </label>
//                   <input type="file" name="selectfile" id="selectfile"  onChange={handleOnChnage}/><br /><br />
//                   <label htmlFor="captions">Captions To be Addedd : </label><br />
//                   <textarea name="captions" id="captions" cols={50} rows={7} value={captions} onChange={handleOnChnage}/><br /><br />

//                   <h2>Upload To :</h2>
//                   <label htmlFor="facebook">Facebook : </label>
//                   <input type="checkbox" name="facebook" id="facebook" value={socialMedia.facebook} onChange={handleOnChnage}/>
//                   <label htmlFor="instagram">Instagram : </label>
//                   <input type="checkbox" name="instagram" id="instagram" value={socialMedia.instagram} onChange={handleOnChnage}/>
//                   <label htmlFor="linkedin">LinkedIn : </label>
//                   <input type="checkbox" name="linkedin" id="linkedin" value={socialMedia.linkedin} onChange={handleOnChnage}/><br /><br />
//                   <input type="submit" value="Submit" />
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default UploadForm;

import React, { useState } from "react";


function UploadForm() {
  const [inputvalues, setInputvalues] = useState({
    file: null,
    captions: "",
    socialMedia: {
      facebook: false,
      instagram: false,
      linkedin: false,
    },
  });

  const { file, captions, socialMedia } = inputvalues;

  const handleOnChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      setInputvalues((prevValues) => ({
        ...prevValues,
        socialMedia: {
          ...prevValues.socialMedia,
          [name]: checked,
        },
      }));
    } else if (type === "file") {
      setInputvalues((prevValues) => ({
        ...prevValues,
        file: files[0],
      }));
    } else {
      setInputvalues({
        ...inputvalues,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Entered values are", inputvalues);
    console.log("Submit button is clicked");
    // You can perform additional actions here, such as file upload.
  };

  return (
    <div>
      <h1>Upload File Form</h1>
      <div className="formcomponent">
        <form onSubmit={handleSubmit}>
          <label htmlFor="selectfile">Upload File: </label>
          <input
            type="file"
            name="file"
            id="selectfile"
            onChange={handleOnChange}
          /><br /><br />

          <label htmlFor="captions">Captions To be Added: </label><br />
          <textarea
            name="captions"
            id="captions"
            cols={50}
            rows={7}
            value={captions}
            onChange={handleOnChange}
          /><br /><br />

          <h2>Upload To:</h2>
          <label htmlFor="facebook">Facebook: </label>
          <input
            type="checkbox"
            name="facebook"
            id="facebook"
            checked={socialMedia.facebook}
            onChange={handleOnChange}
          />
          <label htmlFor="instagram">Instagram: </label>
          <input
            type="checkbox"
            name="instagram"
            id="instagram"
            checked={socialMedia.instagram}
            onChange={handleOnChange}
          />
          <label htmlFor="linkedin">LinkedIn: </label>
          <input
            type="checkbox"
            name="linkedin"
            id="linkedin"
            checked={socialMedia.linkedin}
            onChange={handleOnChange}
          /><br /><br />

          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default UploadForm;
