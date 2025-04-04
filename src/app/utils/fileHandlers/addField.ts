import { FieldType, Field } from "@/app/mixins/PostField";

type SetContent = React.Dispatch<React.SetStateAction<Field[]>>;

export const addField = (setContent: SetContent) => (type: FieldType) => {
    setContent(prevContent => [...prevContent, { id: Date.now(), type, value: "", additional: "" }]);
};