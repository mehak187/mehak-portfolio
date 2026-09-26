// Slow moving shapes behind the whole page. Purely decorative.
export default function BgFx() {
  return (
    <div className="bg-fx" aria-hidden="true">
      <i /><i /><i />
      <s /><s /><s />
      <b>{'</>'}</b>
      <b>{'{ }'}</b>
      <b>{'$'}</b>
    </div>
  )
}
