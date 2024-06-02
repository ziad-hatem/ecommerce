import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Multiselect from "multiselect-react-dropdown";
import ImageUploading from "react-images-uploading";
import { getAllcategory } from "../../redux/actions/categoryAction";
import { useSelector, useDispatch } from "react-redux";
import { createProduct } from "../../redux/actions/productsAction";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";

const AddProductHook = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllcategory());
    }, []);
    //! get all category state from redux
    const category = useSelector((state) => state.allCategory.category);
    // if (category) console.log(category.data); //! emin olmak icin

    const onSelect = () => {};
    const onRemove = () => {};

    const options = [
        { name: "التصنيف الاول", id: 1 },
        { name: "التصنيف الثاني", id: 2 },
    ];

    //! kutuphane kodlari
    // data for submit
    const maxNumber = 10;
    const [images, setImages] = useState([]);
    const onChange = (imageList, addUpdateIndex) => {
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
    };
    //! kutuphane kodlari bitisi

    //! valus state
    const [prodName, setProdName] = useState("");
    const [prodDescription, setProdDescription] = useState("");
    const [price, setPrice] = useState("Fiyat");
    const [catId, setCatId] = useState("");
    const [color, setColor] = useState("");
    const [loading, setLoading] = useState(true);
    //! file icin
    // registerPlugin(FilePondPluginImagePreview);
    // const [files, setFiles] = useState([]);

    //! when select category -> store id
    const onSelectCategory = (e) => {
        setCatId(e.target.value);
    };
    // console.log(catId);

    //! to convert base 64 to file
    // function dataURLtoFile(dataurl, filename) {
    //     var arr = dataurl.split(","),
    //         mime = arr[0].match(/:(.*?);/)[1],
    //         bstr = atob(arr[1]),
    //         n = bstr.length,
    //         u8arr = new Uint8Array(n);

    //     while (n--) {
    //         u8arr[n] = bstr.charCodeAt(n);
    //     }

    //     return new File([u8arr], filename, { type: mime });
    // }

    //! to save data
    const handleSubmit = async (e) => {
        e.preventDefault();
        //! validation eksik sen tamamla
        if (
            prodName === "" ||
            prodDescription === "" ||
            images.length <= 0 ||
            price <= 0 ||
            catId === ""
        ) {
            toast.warn("Lutfen tum alanlari doldurunuz");
        }

        // const imgCover = dataURLtoFile(images[0], Math.random() + ".png");
        const formData = new FormData();
        formData.append("name", prodName);
        formData.append("description", prodDescription);
        formData.append("price", price);
        // formData.append("imageCover", imgCover);
        formData.append("imageCover", images[0]);
        formData.append("categoryId", catId);
        formData.append("color", color);

        console.log(images[0]);
        setLoading(true);
        await dispatch(createProduct(formData));
        setLoading(false);
    };

    //! get create message
    const product = useSelector((state) => state.allProducts.products);

    useEffect(() => {
        if (loading === false) {
            setCatId(0);
            setColor("");
            setImages([]);
            setProdName("");
            setProdDescription("");
            setPrice("Fiyat");
            setTimeout(() => setLoading(true), 1500);

            if (product.status === 201) {
                toast.success("Urun basarili bir sekilde eklendi");
            } else {
                toast.error("Urun eklenmedi");
            }
        }
    }, [loading]);
};

export default AddProductHook;
