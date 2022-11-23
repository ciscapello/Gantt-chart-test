export const handleColorType = (nestingLevel: number | undefined) => {
  switch (nestingLevel) {
    case 1:
      return "background-color: #E2EBFF; border: 1px solid #497CF6;";
    case 3:
    case 4:
      return "background-color: #CFF0D6; border: 1px solid#2DB77B;";
    default:
      return "background-color: #FFF2E0; border: 1px solid #FFA530;";
  }
};
