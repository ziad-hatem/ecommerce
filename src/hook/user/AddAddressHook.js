import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUserAddress } from "../../redux/actions/userAddressesAction";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddAddressHook = () => {
    const navigate = useNavigate(); //! rout'ler arasinda dolasmak icin :)
    const dispatch = useDispatch();
    const [alias, setAlias] = useState("");
    const [detalis, setDetalis] = useState("");
    const [phone, setPhone] = useState("");
    const [loading, setLoading] = useState(true);

    const onChangeAlias = (event) => {
        event.persist();
        setAlias(event.target.value);
    };

    const onChangeDetalis = (event) => {
        event.persist();
        setDetalis(event.target.value);
    };

    const onChangePhone = (event) => {
        event.persist();
        setPhone(event.target.value);
    };
    //! validation sen sonra ekler ve duzeltirsin
    const onSubmit = async () => {
        if (alias === "" || detalis === "" || phone === "") {
            toast.warn("Lutfen Alanlari doldur");
            return;
        }
        setLoading(true);

        await dispatch(
            addUserAddress({
                addressLabel: alias,
                city: detalis,
                district: "",
                neighborhood: "",
                Street: "",
                Building: "",
                apartment: "",
                phone: phone,
            })
        );
        setLoading(false);
    };
    const res = useSelector(
        (state) => state.userAddressesReducer.addUserAddress
    );

    useEffect(() => {
        if (loading === false) {
            if (res && res.status === 200) {
                toast.success("Adres ekleme isi basarili sekilde tamamlandi");
                setTimeout(() => {
                    navigate("/user/addresses");
                }, 3000);
            } else {
                toast.error(
                    "Adres ekleme tamamlanmadi, lutfen tekrar deneyiniz!"
                );
            }
        }
    }, [loading]);

    return [
        alias,
        detalis,
        phone,
        onChangeAlias,
        onChangeDetalis,
        onChangePhone,
        onSubmit,
    ];
};

export default AddAddressHook;
