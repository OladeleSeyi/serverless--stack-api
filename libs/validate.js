import { object, string } from "yup";
const schema = object().shape({
  noteId: string().required(),
  content: string().required(),
});

const validate = async (params) => {
  const valid = await schema.isValid({
    noteId: params.Item.noteId,
    content: params.Item.content,
  });
  if (!valid) {
    throw new Error("Validation error ");
  }
};

export { validate as default };
