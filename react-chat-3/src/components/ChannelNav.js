// import React from 'react';

// export function ChannelList(props) {

//   const channels = props.channels;
//   const currentChannel = props.currentChannel;

//   const linkElemArray = channels.map((channelNameString) => {

//     let classList = "btn btn-sm btn-outline-light my-1";
//     if(channelNameString === currentChannel) {
//       classList = "btn btn-sm btn-warning"
//     }

//     const element = (
//       <div key={channelNameString}>
//         <button className={classList}>{channelNameString}</button>
//       </div>
//     )
//     return element;
//   })

//   return (
//     <nav className="text-light bg-secondary h-100 py-3 channel-nav px-2">
//       {linkElemArray}
//     </nav>
//   )
// }

// Slide 31 Make channelist changing interactive
import React from 'react';

export function ChannelList(props) {

  const channels = props.channels;
  const currentChannel = props.currentChannel;

  const handleClick = (event) => {
    // console.log("event: ", event)
    console.log("event.textContent ", event.target.value)
    props.updateCurrentChannel(event.target.value);
  }

  const linkElemArray = channels.map((channelNameString) => {

    let classList = "btn btn-sm btn-outline-light my-1";
    if(channelNameString === currentChannel) {
      classList = "btn btn-sm btn-warning"
    }

    const element = (
      <div key={channelNameString} >
        <button className={classList} value={channelNameString} onClick={handleClick}>{channelNameString}</button>
      </div>
    )
    return element;
  })

  return (
    <nav className="text-light bg-secondary h-100 py-3 channel-nav px-2">
      {linkElemArray}
    </nav>
  )
}