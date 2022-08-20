function ModalForm({ changeRound }) {
  return (
    <>
      <select onChange={(e) => changeRound(e.target.value)}>
        <option value="32">32강</option>
        <option value="16">16강</option>
        <option value="8">8강</option>
        <option value="4">4강</option>
      </select>
    </>
  );
}
export default ModalForm;
