/**
 * An Actions object. Used with postback and reply payloads.
 * The actions object represents structured actions that the user can take.
 * The payload field is the payload sent to the bot on the activation of a reply or quick reply button.
 */
export const actions = (type, payload, text) => {
  return {
    type: type, //  Required. The action type: postback or reply
    payload: payload, // Required. The payload sent to the bot on the activation of a postback or reply button.
    text: text // Required. The text used with the postback or reply.
  };
};

export const textReply = (lithiumEvent, text) => {
  return {
    coordinate: lithiumEvent.coordinate, //the bot simply passes the coordinate back
    author: lithiumEvent.author, //the bot simply passes the author back
    type: "message",
    text: text
  };
};

export const handover = lithiumEvent => {
  return {
    coordinate: lithiumEvent.coordinate,
    author: lithiumEvent.author,
    type: "control",
    owner: {
      type: "AGENT"
    }
  };
};

/**
 * The Author object defines the remote author associated with a message.
 */
export const author = {
  id: "", // The author ID set by the social channel
  fullName: "" // The full name of the author
};

/**
 * Most payloads delivered to and from the Automation Framework require a coordinate object.
 * When responding to a webhook, simply respond to it with the same coordinate passed to you.
 * Do not alter the coordinate you receive. When calling an endpoint asynchronously, either
 * use a coordinate you have stored or construct it manually.
 */
export const coordinate = {
  companyKey: "<company-key>", // Your company key as defined in Response
  networkKey: "<network-key>", // The social network as defined during bot registration with Khoros
  externalId: "<external-id>", // The external ID of the social network integrated with Khoros
  botId: "<registered-bot-id>", // The internal ID of the bot as registered with Khoros. This is equivalent to the bot registration appId field.
  messageId: "<network-message-id>", // The ID of the message generated by the external network
  scope: "PRIVATE", // The scope is always PRIVATE
  parentId: "<network-message-parent-id>" // The ID of the parent message being replied to or commented on. This is used with networks that display messages in a hierarchical format. For most messages, the Coordinate object will not have parentId set.
};

/**
 * Media objects can be included in a few different payload types sent with /bots/v3/respond.
 * Messages can contain a media list, for example, and list pickers can reference image media.
 */
export const media = (url, type = "IMAGE") => {
  return {
    url: url, // The fully-qualified, publicly-available reference to the media
    mediaType: type // IMAGE, VIDEO
  };
};

/**
 * Rich content refers to some external document or media file that supporting networks can display in special ways.
 * For example, images and videos can be displayed inline, or links to articles can be supplied along with an image
 * to display inline. When sending a richContent object in the /bots/v3/respond JSON payload, we recommend also
 * including the text field as a fallback in case the rich content isn't supported.
 */
export const richContent = (type, url, title, mediaUrl, mimeType) => {
  return {
    mediaType: type, // Required. A type like IMAGE or VIDEO.
    url: url, // Required. A URL of a resource to which the end user will be redirected if they click the rich content/link.
    title: title, // Required. A title for the content at url.
    mediaUrl: mediaUrl, // Required. A URL of a media resource like an image or video. Handling may be network-specific.
    mimeType: mimeType // "image/jpeg" // Required. The MIME type of the resource at mediaUrl.
  };
};
