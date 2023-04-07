export default function Search({ onChange }) {
  return (
    <div className={"flex justify-center mb-12"}>
      <input
        className={
          "m-auto w-6/12 border-transparent border-2 border-b-gray-200 text-center "
        }
        type="text"
        onChange={onChange}
        placeholder="무엇을 버리고 싶은가요?"
      />
    </div>
  );
}
