export default function Card({
  name,
  description,
}: {
  name: string;
  description: string;
}) {
  return (
    <div className="bg-gray-300 rounded-2xl bg-opacity-10 p-4 basis-[40%]">
      <h1 className="text-2xl font-bold">{name}</h1>
      <p className="text-lg">{description}</p>
    </div>
  );
}
