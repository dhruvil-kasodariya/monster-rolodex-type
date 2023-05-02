import { ChangeEventHandler } from "react";
import "./search-box.component.css";

// interface ISearchBoxProps {
//   placeholder?: string;
//   className: string;
// }

// interface ISearchBoxProps {
//   onChangeHandle: (a: string) => void;
// }

// // //other way to defene and commene interfacee
// // interface ISearchBoxProps extends IChangeHandler {
// //   placeholder?: string;
// //   className: string;
// // }

// // interface IChangeHandler {
// //   onChangeHandle: (a: string) => void;
// // }

type SearchBoxProps = {
  onChangeHandle: ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
  className: string;
};

function SearchBox({ onChangeHandle, placeholder, className }: SearchBoxProps) {
  return (
    <div>
      <input
        type="search"
        className={`search-box ${className}`}
        placeholder={placeholder}
        onChange={onChangeHandle}
      />
    </div>
  );
}

export default SearchBox;
