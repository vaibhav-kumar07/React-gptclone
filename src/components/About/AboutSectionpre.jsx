import Listbox from "./listbox"

export default function AboutSectionpre() {
  return (
    <>
     <main>
        <div class="maindiv1">

            <h2> what is GPT-3 ?</h2>
            <p>We so opinion friends me message as delight. Whole front do
                of plate heard oh ought. His defective nor
                convinced residence own. Connection has put impossible own
                apartments boisterous. At jointure ladyship
                an insisted so humanity he. Friendly bachelor entrance to on
                by.</p>

        </div>
        <div class="maindiv2">
            <h2>The possibilities are beyond your imagination</h2>
            <p>Explore the library</p>
        </div>
        <div class="maindivlistitems">
           <Listbox />
           <Listbox />
           <Listbox />
        </div>
        </main>
    </>
  )
}
