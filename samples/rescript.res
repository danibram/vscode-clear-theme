module BaseButton = {
  @react.component
  let make = (
    ~className=?,
    ~style=?,
    ~type_=?,
    ~disabled=?,
    ~id=?,
    ~title=?,
    ~onClick=?,
    ~children=React.null,
  ) =>
    <button ?id ?onClick ?style ?type_ ?disabled ?className>
      {switch title {
      | Some(string) => string->React.string
      | _ => React.null
      }}
      children
    </button>
}

@react.component
let primary = (
  ~className="w-full",
  ~style=?,
  ~type_="button",
  ~disabled=false,
  ~id=?,
  ~title=?,
  ~onClick=?,
  ~children=React.null,
) =>
  <BaseButton
    ?id
    ?onClick
    ?style
    type_
    disabled
    className={`focus:ring-indigo-600 focus:ring-offset-indigo-600 transition ease-in duration-200 text-center shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 rounded-lg py-2 px-4 ${className} ${disabled
        ? "bg-gray-100 text-gray-500 cursor-not-allowed"
        : "bg-indigo-600 text-white hover:bg-indigo-700"}`}>
    {switch title {
    | Some(string) => string->React.string
    | _ => React.null
    }}
    children
  </BaseButton>

@react.component
let blank = (
  ~className="w-full",
  ~style=?,
  ~type_="button",
  ~disabled=false,
  ~id=?,
  ~title=?,
  ~onClick=?,
  ~children=React.null,
) =>
  <BaseButton
    ?id
    ?onClick
    ?style
    type_
    disabled
    className={`border border-gray-300 transition ease-in duration-200 text-center shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 rounded-lg py-2 px-4 ${className} ${disabled
        ? "bg-gray-100 text-gray-500 cursor-not-allowed"
        : "bg-white hover:bg-gray-50 text-gray-700"}`}>
    {switch title {
    | Some(string) => string->React.string
    | _ => React.null
    }}
    children
  </BaseButton>
