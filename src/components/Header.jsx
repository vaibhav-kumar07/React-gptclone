import React from 'react'

export default function Header() {
  return (
    <>  <header>
    <div class="headerinfo">
        <h1>Let’s Build Something amazing with GPT-3 OpenAI</h1>

        <p class="headerinfodesc">
            Yet bed any for travelling assistance indulgence unpleasing.
            Not
            thoughts all exercise blessing. Indulgence way everything
            joy
            alteration boisterous the attachment. Party we years to
            order allow
            asked of.
        </p>
        <div class="emailinputfilled">
            <input class="EmailInput" type="email" placeholder="You Email Address" />
            <button class="EmailSubmitbutton">Get Started</button>
        </div>
        <p class="follower">1,600 people requested access a visit in
            last 24 hours</p>
    </div>
    <div class="headerface">
        <img src="../src/images/Illustration.png" alt="image"/>
    </div>
</header>
    </>
  )
}
