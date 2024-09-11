import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export type GenderProps = {
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
};

const Gender = ({ selected, setSelected }: GenderProps) => {
  const [params, setParams] = useSearchParams();

  // Update URL parameters based on the selected gender
  useEffect(() => {
    if (selected) {
      params.set("gender", selected);
    } else {
      params.delete("gender");
    }
    setParams(params);
  }, [selected]);

  return (
    <div>
      <h2 className="mb-4 font-semibold">Cinsiyet</h2>

      <div className="flex items-center gap-3">
        <input
          checked={selected === "men"}
          onChange={() => setSelected("men")}  // Use onChange instead of onClick
          name="gen"
          type="radio"
          id="men"
        />
        <label htmlFor="men" className="font-semibold">
          Erkek
        </label>
      </div>

      <div className="flex items-center gap-3">
        <input
          checked={selected === "women"}
          onChange={() => setSelected("women")}  // Use onChange instead of onClick
          name="gen"
          type="radio"
          id="women"
        />
        <label htmlFor="women" className="font-semibold">
          Kadın
        </label>
      </div>
    </div>
  );
};

export default Gender;