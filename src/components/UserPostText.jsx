export default function UserPostText() {
  const longText =
    "A quod dolorum sint laborum ea cupiditate numquam hic aliquam vero totam. ".repeat(
      10
    );
  const shortText =
    longText.length > 300 ? longText.slice(0, 100) + "..." : longText;

  return (
    <div className="w-[100%] ">
      <div className="whitespace-wrap break-words text-sm">{shortText}</div>
    </div>
  );
}
