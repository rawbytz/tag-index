(function tagIndex_3_7(separator ='"_separator_"') {

  if (separator === '"_separator_"') separator = " ";

  function toastMsg(str, sec, err) {
    WF.showMessage(str, err);
    setTimeout(WF.hideMessage, (sec || 2) * 1000);
  }
  function getDescendantTags(item) {
    const tagCounts = item.isMainDocumentRoot() ? getRootDescendantTagCounts() : item.getTagManager().descendantTagCounts;
    const tagList = tagCounts ? tagCounts.getTagList() : [];
    const tagArr = tagList.map(Tag => Tag.tag);
    return tagArr.filter(tag => tag.toLowerCase() !== "#template");
  }
  const htmlEscTextForContent = str => str.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/\u00A0/g, " ");
  function newTopBullet(str) {
    WF.editGroup(() => {
      const newBullet = WF.createItem(WF.currentItem(), 0);
      WF.setItemName(newBullet, htmlEscTextForContent(str));
    });
  }
  const current = WF.currentItem();
  const tagNames = getDescendantTags(current);
  if (tagNames.length === 0) return void toastMsg("No tags found.", 2, true);
  if (current.isEmbedded()) return void toastMsg("Tag Index is disabled for added shares.", 5, true);
  tagNames.sort((a, b) => a.localeCompare(b));
  newTopBullet(tagNames.join(separator));
})();