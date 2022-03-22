import React from 'react';

export default function Navigation(props) {
  const { handleSave, statusSave } = props;
  const [block, setBlock] = React.useState(false)
  function handleBlock() {
    setBlock(true)
    setTimeout(() => {
      setBlock(false)
    }, 1000)
  }
  return (
    <div className={`fixed w-96 bg-white p-1 rounded-sm bg-opacity-95 border shadow-md border-zinc-100 bottom-3 flex items-center justify-start z-50`} style={{ left: '50%', marginLeft: '-12rem' }}>

      <div
        className={`cursor-pointer z-50 shadow-md left-2 ${statusSave ? `bg-belplit_2 text-white hover:scale-105 transition-all duration-75` : `bg-zinc-200 border ${block ? 'text-red-800' : 'text-zinc-800'}`}  text-sm font-light rounded-sm px-2 py-1 `}
        onClick={statusSave ? handleSave : handleBlock}
      >
        сохранить
      </div>
      <div className={`font-light uppercase`}>Страницы</div>
      <div className={`font-light uppercase`}>Контакты</div>
    </div>
  );
}
