(function tagIndex_3_6(separator ='"_separator_"') {
  function toastMsg(str, sec, err) {
    WF.showMessage(str, err);
    setTimeout(WF.hideMessage, (sec || 2) * 1000);
  }
  function getDescendantTags(item) {
    const tagCounts = item.isMainDocumentRoot() ? getRootDescendantTagCounts() : item.getTagManager().descendantTagCounts;
    const tagList = tagCounts ? tagCounts.getTagList() : [];
    return tagList.map(Tag => Tag.tag)
  }
  const htmlEscTextForContent = str => str.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/\u00A0/g, " ");
  function newTopBullet(str) {
    WF.editGroup(() => {
      WF.createItem(WF.currentItem(), 0);
      WF.setItemName(WF.focusedItem(), htmlEscTextForContent(str));
    });
  }
  const canCreateChild = item => !item.isReadOnly() || item.isMainDocumentRoot() || (item.isAddedSubtreePlaceholder() && !item.data.added_subtree.isReadOnly());
  const sep = separator || " ";
  const current = WF.currentItem();
  const tagNames = getDescendantTags(current);
  if (tagNames.length === 0) return void toastMsg("No tags found.", 2, true);
  if (!canCreateChild(current)) return void toastMsg("Read-Only. Cannot create bullet", 5, true);
  tagNames.sort((a, b) => a.localeCompare(b));
  newTopBullet(tagNames.join(sep));
})();