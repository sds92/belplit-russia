const _m = 0;
const _p = 0;
const _ta = 'left';
const _tc = 'current';
const _ts = 'md';
const _tw = 'light';
const _va = 'middle';
const TEXT = ({ va = _va, ta = _ta, ts = _ts, tc = _tc, tw = _tw, mx = _m, my = _m, px = _p, py = _p }) =>
  `text-${ta} text-${ts} text-${tc} font-${tw} mx-${mx} my-${my} px-${px} py-${py} align-${va}`;
function createMarkup(data) {
  return { __html: data };
}
export default function Text({ children, va, ta, ts, tc, tw, mx, my, px, py, extraClasses, onClick }) {
  
  return (
    <div
      className={`${TEXT({
        ta,
        ts,
        tc,
        tw,
        va,
        mx,
        my,
        px,
        py,
      })} ${extraClasses}`}
      onClick={onClick || null}
    >
      {children && typeof children !== 'string' ? (
        <p dangerouslySetInnerHTML={createMarkup(children)}></p>
      ) : (
        children
      )}
    </div>
  );
}
