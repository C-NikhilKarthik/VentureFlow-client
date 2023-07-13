interface Navprops{
    text:string
}

export default function NavbarButton(props : Navprops) {
  return (
    <a className="after:w-0 cursor-pointer mr-8 after:block after:h-[2px] after:rounded after:bg-purple-600 hover:after:w-full after:transition-[width] after:duration-300">{props.text}</a>
  )
}
