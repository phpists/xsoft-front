import styled from "styled-components";
import { Header } from "./Header/Header";
import { Info } from "./Info/Info";
import { Tabs } from "../../../components/Tabs/Tabs";
import { BiSolidCartAlt } from "react-icons/bi";
import { useEffect, useState } from "react";
import { Information } from "./Information/Information";
import {
  useGetProductInfoQuery,
  useLazyAddProductQuery,
  useLazyEditProductQuery,
  useLazyGetProductQuery,
  useLazySaveProductMediaQuery,
} from "../../../store/products/products.api";
import { IProduct } from "../../../types/products";
import { showMessage } from "../../../helpers";
import { useNavigate, useParams } from "react-router-dom";
import { MediaFile } from "../../../components/Files/Files";
import { INIT_PHONE } from "../../../components/PhonesInput/PhonesInput";

const TABS = [{ title: "Інформація", Icon: BiSolidCartAlt }];

const INIT_VALUE = {
  brand_id: undefined,
  category_id: undefined,
  article: "",
  title: "",
  description: "",
  product_measure_id: undefined,
  color: "#2EB062",
  balance: 0,
  cost_price: 0,
  retail_price: 0,
  tags: [],
  vendors: [],
  phones: [INIT_PHONE],
};

export const Content = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [getProduct] = useLazyGetProductQuery();
  const { data: productInfo, refetch: refetchProductInfo } =
    useGetProductInfoQuery({});
  const [data, setData] = useState<any>(INIT_VALUE);
  const [activeTab, setActiveTab] = useState(0);
  const [addProduct] = useLazyAddProductQuery();
  const [editProduct] = useLazyEditProductQuery();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const [media, setMedia] = useState<MediaFile[]>([]);
  const [saveMedia] = useLazySaveProductMediaQuery();

  const handleChangeTab = (tab: number) => setActiveTab(tab);
  const handleChangeField = (
    field: string,
    value: string | boolean | number | string[] | number[]
  ) => {
    setData({ ...data, [field]: value });
    setErrors(errors.filter((e) => e !== field));
  };

  const handleCheckFields = () => {
    const fieldsErr: string[] = [];

    !data.brand_id && fieldsErr.push("brand_id");
    !data.category_id && fieldsErr.push("category_id");
    !data.product_measure_id && fieldsErr.push("product_measure_id");
    data.title?.length === 0 && fieldsErr.push("title");
    data.article?.length === 0 && fieldsErr.push("article");
    data.description?.length === 0 && fieldsErr.push("description");
    data.balance?.toString()?.length === 0 && fieldsErr.push("balance");
    data.cost_price?.toString()?.length === 0 && fieldsErr.push("cost_price");
    data.retail_price?.toString()?.length === 0 &&
      fieldsErr.push("retail_price");

    setErrors(fieldsErr);
    if (fieldsErr.length > 0) {
      showMessage("error", "Заповніть обов'язкові поля");
    }
    return fieldsErr.length === 0;
  };
  const handleSaveMedia = async (productId: string) => {
    const formData = new FormData();
    const mediaFiles = media?.filter((m) => !!m.file);

    if (mediaFiles?.length > 0) {
      formData.append("product_id", productId ?? id);
      mediaFiles.forEach(
        (m, i) => m.file && formData.append(`media[${i}]`, m.file)
      );
      const resp = await saveMedia(formData);
      const updatedMedia = resp?.data.response.user?.media?.map((m: any) => ({
        file: undefined,
        url: m.file ?? "",
        id: m.id,
      }));

      updatedMedia && setMedia(updatedMedia);
      return;
    } else {
      return;
    }
  };

  const handleSuccesCreate = () => {
    showMessage("success", "Товар успішно добавлено");
    navigate("/items");
  };

  const handleCreate = () => {
    addProduct(data).then(async (resp: any) => {
      setLoading(false);
      if (!resp.isError) {
        console.log(resp);
        const productId = resp?.data.response?.product?.id;
        await handleSaveMedia(productId);
        handleSuccesCreate();
      } else {
        showMessage("error", resp?.error.data.message);
      }
    });
  };

  const handleEdit = () => {
    editProduct(data).then(async (resp: any) => {
      setLoading(false);
      if (!resp.isError) {
        await handleSaveMedia(id ?? "");
        showMessage("success", "Товар успішно збережено");
      } else {
        showMessage("error", resp?.error.data.message);
      }
    });
  };

  const handleSave = () => {
    if (handleCheckFields()) {
      setLoading(true);
      id ? handleEdit() : handleCreate();
    }
  };

  //   useEffect(() => {
  //     if (id) {
  //       getProduct(id).then((resp: any) => {
  //         const product = resp?.data?.response?.product;
  //         setData({
  //           ...product,
  //           title: product?.title ?? "",
  //           color: product?.color ?? "#2EB062",
  //         });
  //         setMedia(
  //           product?.media.map((m: any) => ({
  //             file: undefined,
  //             url: m.file ?? "",
  //             id: m.id,
  //           }))
  //         );
  //       });
  //     }
  //   }, [id]);

  return (
    <StyledContent>
      <Header />
      <div className="main-wrapper">
        <Info title={data.title} color={data.color} />
        <div>
          <div className="py-3.5 px-4 border-b-[1px] border-[#DBDBDB]">
            <div className="w-[196px]">
              <Tabs tabs={TABS} active={activeTab} onChange={handleChangeTab} />
            </div>
          </div>
          <div className="content-wrapper no-scrollbar">
            <Information
              data={data}
              onChange={handleChangeField}
              onSave={handleSave}
              errors={errors}
              loading={loading}
            />
          </div>
        </div>
      </div>
    </StyledContent>
  );
};

const StyledContent = styled.div`
  padding: 12px 14px 14px;
  .main-wrapper {
    display: grid;
    grid-template-columns: 320px 1fr;
    border-radius: 16px;
    background: #fff;
    height: calc(100vh - 123px);
    overflow: hidden;
  }
  .content-wrapper {
    height: calc(100vh - 184px);
    background: #efefef;
    overflow: auto;
  }
`;
