// import { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { createCategory } from "../../redux/actions/categoryAction";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import notify from "../../hook/useNotifaction";
// import avatar from "../../images/avatar.png";

// const AddCategoryHook = () => {
//     const dispatch = useDispatch();
//     const [img, setImg] = useState(avatar);
//     const [name, setName] = useState("");
//     const [selectedFile, setSelectedFile] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [isPress, setIsPress] = useState(false);

//     //to change name state
//     const onChangeName = (event) => {
//         event.persist();
//         setName(event.target.value);
//     };

//     //when image change save it
//     const onImageChange = (event) => {
//         if (event.target.files && event.target.files[0]) {
//             setImg(URL.createObjectURL(event.target.files[0]));
//             setSelectedFile(event.target.files[0]);
//         }
//     };
//     const res = useSelector((state) => state.allCategory.category);

//     //save data in database
//     const handelSubmit = async (event) => {
//         event.preventDefault();
//         if (name === "" || selectedFile === null) {
//             console.log("من فضلك اكمل البيانات");
//             notify("من فضلك اكمل البيانات", "warn");
//             return;
//         }
//         const formData = new FormData();
//         formData.append("name", name);
//         formData.append("image", selectedFile);
//         setLoading(true);
//         setIsPress(true);
//         await dispatch(createCategory(formData));
//         setLoading(false);
//     };

//     useEffect(() => {
//         if (loading === false) {
//             setImg(avatar);
//             setName("");
//             setSelectedFile(null);
//             console.log("islme tamamlandi");
//             setLoading(true);
//             setTimeout(() => setIsPress(false), 1000);

//             if (res.status === 201) {
//                 toast.success("Ekleme islemi basarili");
//             } else {
//                 toast.error("Ekleme isleminde hata var");
//             }
//         }
//     }, [loading, res.status]);

//     return [
//         img,
//         name,
//         loading,
//         isPress,
//         handelSubmit,
//         onImageChange,
//         onChangeName,
//     ];
// };

// export default AddCategoryHook;
