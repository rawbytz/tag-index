# TagIndex Bookmarklet for WorkFlowy
- Creates an index of your WorkFlowy tags.
- To include ALL tags, activate from your Home page.
- Zoom on a bullet to confine the tag selection to that level's children and below.
- The index is created instantly in a new top bullet.
- Undo the bullet creation with WorkFlowy's undo feature.

![tagIndex](https://i.imgur.com/iKmdveY.png)

## Installation: Drag this link to your bookmarks bar:

<!-- [] Edit separator -->
<a href="javascript:(function tagIndex_3_6(separator=' | '){if(separator==='&quot;_separator_&quot;')separator=&quot; &quot;;function toastMsg(str,sec,err){WF.showMessage(str,err);setTimeout(WF.hideMessage,(sec||2)*1e3)}function getDescendantTags(item){const tagCounts=item.isMainDocumentRoot()?getRootDescendantTagCounts():item.getTagManager().descendantTagCounts;const tagList=tagCounts?tagCounts.getTagList():[];const tagArr=tagList.map(Tag=&gt;Tag.tag);return tagArr.filter(tag=&gt;tag.toLowerCase()!==&quot;#template&quot;)}const htmlEscTextForContent=str=&gt;str.replace(/&amp;/g,&quot;&amp;amp;&quot;).replace(/&gt;/g,&quot;&amp;gt;&quot;).replace(/&lt;/g,&quot;&amp;lt;&quot;).replace(/\u00A0/g,&quot; &quot;);function newTopBullet(str){WF.editGroup(()=&gt;{const newBullet=WF.createItem(WF.currentItem(),0);WF.setItemName(newBullet,htmlEscTextForContent(str))})}const canCreateChild=item=&gt;!item.isReadOnly()||item.isMainDocumentRoot()||item.isAddedSubtreePlaceholder()&amp;&amp;!item.data.added_subtree.isReadOnly();const current=WF.currentItem();const tagNames=getDescendantTags(current);if(tagNames.length===0)return void toastMsg(&quot;No tags found.&quot;,2,true);if(!canCreateChild(current))return void toastMsg(&quot;Read-Only. Cannot create bullet&quot;,5,true);tagNames.sort((a,b)=&gt;a.localeCompare(b));newTopBullet(tagNames.join(separator))})();">tagIndex</a>

## Customize bookmarklet after install:
- Right click the bookmarklet in the bookmarks bar > Edit
- Near the beginning of the code/url you will see this:  `(separator=' | ');`
- Edit between the single quotes to define your custom separator.
- Use a single space or colon for maximum density.

## Links:
- [Source code](https://github.com/rawbytz/tag-index/blob/master/tagIndex.js)
- [rawbytz Blog](https://rawbytz.wordpress.com)

## Version Notes:
- v3.6 (2020-06-28) Remove #template tag from index
- v3.5 (2020-01-26) Updated html escape function
- v3.4 (2019-12-15) Minor refactor.
- v3.2 (2019-05-29) Bug fix: will not attempt to write to read only nodes.
- v3.1 (2019-05-28) Updated to new API item format
- v3.0 (2018-12-28) minor code cleanup

<!-- 
LINKS REFERENCING THIS
@BLOGGER https://www.blogger.com/blogger.g?blogID=6597785605721546133#editor/target=page;pageID=3808109402056486380

@SOFTWARE https://rawbytz.wordpress.com/software/

@BLOG https://rawbytz.wordpress.com/?s=tag+index

@WFBLOG https://blog.workflowy.com/2016/09/08/tagindex-bookmarklet/
 -->
