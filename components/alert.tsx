export default function AlertBox(props: {
  message: string;
  type: "info" | "warning" | "error";
  className?: string;
}) {
  return (
    <div
      className={`fixed bottom-6 right-6 bg-${props.type === "info" ? "blue" : props.type === "warning" ? "yellow" : "red"}-200 text-${props.type === "info" ? "blue" : props.type === "warning" ? "yellow" : "red"}-800 border-l-4 border-${props.type === "info" ? "blue" : props.type === "warning" ? "yellow" : "red"}-500 p-4 `}
    >
        
      <p className="text-white">{props.message}</p>
    </div>
  )
}
