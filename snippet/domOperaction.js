/*根据ID获取元素*/
var $id = function(id){
    return document.getElementById(id);
};

/*根据标签名获取元素，返回元素的节点伪数组*/
var $tag = function(tagName, parent){
    return (parent || document).getElementsByTagName(tagName);
};