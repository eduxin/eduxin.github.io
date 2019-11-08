/**
 *  ueditor完整配置项
 *  可以在这里配置整个编辑器的特性
 */

(function (){
    var URL= "../../../";                            //这里你可以配置成ueditor目录在您网站的相对路径或者绝对路径
    UEDITOR_CONFIG = {
        imagePath : URL + "uploads/allimg/",    //图片保存目录，需要与后台返回的图片地址数据配合！
        maxImageSideLength:500,                //上传图片最大允许的边长，超过会自动等比缩放
        UEDITOR_HOME_URL: URL,
        toolbars: [
            ['FullScreen','Source','|','Undo','Redo','|',
             'Bold','Italic','Underline','StrikeThrough','Superscript','Subscript','RemoveFormat','FormatMatch','|',
             'BlockQuote','|',
             'PastePlain','|',
             'ForeColor','BackColor','InsertOrderedList','InsertUnorderedList','|',
             'Paragraph','RowSpacing','FontFamily','FontSize','|',
             'DirectionalityLtr','DirectionalityRtl','|','','Indent','|',
             'JustifyLeft','JustifyCenter','JustifyRight','JustifyJustify','|',
             'Link','Unlink','Anchor','|','ImageNone','ImageLeft','ImageRight','ImageCenter','|','InsertImage','Emotion','InsertVideo','Map','GMap','InsertFrame', 'PageBreak','HighlightCode','|',
             'Horizontal','Date','Time','Spechars','|',
             'InsertTable','DeleteTable','InsertParagraphBeforeTable','InsertRow','DeleteRow','InsertCol','DeleteCol','MergeCells','MergeRight','MergeDown','SplittoCells','SplittoRows','SplittoCols','|',
             'SelectAll','ClearDoc','SearchReplace','Print','Preview','CheckImage','Help']
        ],
        labelMap: {
            'anchor':'锚点',
            'undo': '撤销',
            'redo': '重做',
            'bold': '加粗',
            'indent':'首行缩进',
//            'outdent':'取消缩进',
            'italic': '斜体',
            'underline': '下划线',
            'strikethrough': '删除线',
            'subscript': '下标',
            'superscript': '上标',
            'formatmatch': '格式刷',
            'source': '源代码',
            'blockquote': '引用',
            'pasteplain': '纯文本粘贴模式',
            'selectall': '全选',
            'print': '打印',
            'preview': '预览',
            'horizontal': '分隔线',
            'removeformat': '清除格式',
            'time': '时间',
            'date': '日期',
            'unlink': '取消链接',
            'insertrow': '前插入行',
            'insertcol': '前插入列',
            'mergeright': '右合并单元格',
            'mergedown': '下合并单元格',
            'deleterow': '删除行',
            'deletecol': '删除列',
            'splittorows': '拆分成行',
            'splittocols': '拆分成列',
            'splittocells': '完全拆分单元格',
            'mergecells': '合并多个单元格',
            'deletetable': '删除表格',
            'insertparagraphbeforetable': '表格前插行',
            'cleardoc': '清空文档',
            'fontfamily': '字体',
            'fontsize': '字号',
            'paragraph': '段落格式',
            'insertimage': '图片',
            'inserttable': '表格',
            'link': '超链接',
            'emotion': '表情',
            'spechars': '特殊字符',
            'searchreplace': '查询替换',
            'map': 'Baidu地图',
            'gmap': 'Google地图',
            'insertvideo': '视频',
            'help': '帮助',
            'justifyleft':'居左对齐',
            'justifyright':'居右对齐',
            'justifycenter':'居中对齐',
            'justifyjustify':'两端对齐',
            'forecolor' : '字体颜色',
            'backcolor' : '背景色',
            'insertorderedlist' : '有序列表',
            'insertunorderedlist' : '无序列表',
            'fullscreen' : '全屏',
            'directionalityltr' : '从左向右输入',
            'directionalityrtl' : '从右向左输入',
            'rowspacing' : '行距',
            'highlightcode' : '插入代码',
            'pagebreak':'分页',
            'insertframe':'插入Iframe',
            'imagenone':'默认',
            'imageleft':'居左',
            'imageright':'居右',
            'imagecenter':'居中',
            'checkimage':'图片转存'
        },
        iframeUrlMap: {
            'anchor': '~/dialogs/anchor/anchor.html',
            'insertimage': '~/dialogs/image/image.html',
            'inserttable': '~/dialogs/table/table.html',
            'link': '~/dialogs/link/link.html',
            'spechars': '~/dialogs/spechars/spechars.html',
            'searchreplace': '~/dialogs/searchreplace/searchreplace.html',
            'map': '~/dialogs/map/map.html',
            'gmap': '~/dialogs/gmap/gmap.html',
            'insertvideo': '~/dialogs/video/video.html',
            'help': '~/dialogs/help/help.html',
            'highlightcode' : '~/dialogs/code/code.html',
            'emotion': '~/dialogs/emotion/emotion.html',
            'wordimage':'~/dialogs/wordimage/wordimage.html',
            'insertframe': '~/dialogs/insertframe/insertframe.html'
        },
        listMap: {
            'fontfamily': ['宋体', '楷体', '隶书', '黑体','微软雅黑','andale mono','arial','arial black','comic sans ms','impact','times new roman'],
            'fontsize': [10, 11, 12, 14, 16, 18, 20, 24, 36],
            'underline':['none','overline','line-through','underline'],
            'paragraph': ['p:Paragraph', 'h1:Heading 1', 'h2:Heading 2', 'h3:Heading 3', 'h4:Heading 4', 'h5:Heading 5', 'h6:Heading 6'],
            'rowspacing' : ['1.0:0','1.5:15','2.0:20','2.5:25','3.0:30']
        },
        fontMap: {
            '宋体': ['宋体', 'SimSun'],
            '楷体': ['楷体', '楷体_GB2312', 'SimKai'],
            '黑体': ['黑体', 'SimHei'],
            '隶书': ['隶书', 'SimLi'],
            'andale mono' : ['andale mono'],
            'arial' : ['arial','helvetica','sans-serif'],
            'arial black' : ['arial black','avant garde'],
            'comic sans ms' : ['comic sans ms'],
            'impact' : ['impact','chicago'],
            'times new roman' : ['times new roman'],
			'微软雅黑' : ['微软雅黑']
        },
        contextMenu: [
            {
                label : '删除',
                cmdName : 'delete'

            },
            {
                label : '全选',
                cmdName : 'selectall'

            },{
                label : '删除代码',
                cmdName : 'highlightcode',
                icon : 'deletehighlightcode'

            },{
                 label : '清空文档',
                 cmdName : 'cleardoc',
                exec : function(){

                    if(confirm('确定清空文档吗？')){

                        this.execCommand('cleardoc');
                    }
                }
            },'-',{
                 label : '取消链接',
                 cmdName : 'unlink'
            },'-',{
                group : '段落格式',
                icon : 'justifyjustify',

                subMenu : [
                    {
                        label: '居左对齐',
                        cmdName : 'justify',
                        value : 'left'
                    },
                   {
                        label: '居右对齐',
                        cmdName : 'justify',
                        value : 'right'
                    },{
                        label: '居中对齐',
                        cmdName : 'justify',
                        value : 'center'
                    },{
                        label: '两端对齐',
                        cmdName : 'justify',
                        value : 'justify'
                    }
                ]
            },'-',{
                    label:'表格属性',
                    cmdName:'edittable',
                    exec : function(){
                        this.tableDialog.open();
                    }
                },{
                group : '表格',
                icon : 'table',

                subMenu : [
                    {
                        label: '删除表格',
                        cmdName : 'deletetable'
                    },
                    {
                        label: '表格前插行',
                        cmdName : 'insertparagraphbeforetable'
                    },
                    '-',
                    {
                        label: '删除行',
                        cmdName : 'deleterow'
                    },
                    {
                        label: '删除列',
                        cmdName : 'deletecol'
                    },
                    '-',
                     {
                        label: '前插入行',
                        cmdName : 'insertrow'
                    },
                    {
                        label: '前插入列',
                        cmdName : 'insertcol'
                    },
                    '-',
                     {
                        label: '右合并单元格',
                        cmdName : 'mergeright'
                    },
                    {
                        label: '下合并单元格',
                        cmdName : 'mergedown'
                    },
                    '-',
                     {
                        label: '拆分成行',
                        cmdName : 'splittorows'
                    },
                    {
                        label: '拆分成列',
                        cmdName : 'splittocols'
                    },
                     {
                        label: '合并多个单元格',
                        cmdName : 'mergecells'
                    },
                    {
                        label: '完全拆分单元格',
                        cmdName : 'splittocells'
                    }
                ]
            },
            {
                label : '复制(ctrl+c)',
                cmdName : 'copy',
                exec : function(){
                    alert("请使用ctrl+c进行复制");
                }
            },
            {
                label : '粘贴(ctrl+v)',
                cmdName : 'paste',
                exec : function(){
                    alert("请使用ctrl+v进行粘贴");
                }
            }
        ],
        initialStyle:                                       //编辑器内部样式
            //选中的td上的样式
            '.selectTdClass{background-color:#3399FF !important}'+
            //插入代码的外框样式
            'pre{background-color:#F8F8F8;border:1px solid #CCCCCC;padding:10px 10px;margin:5px;word-wrap:normal;}'+
             //插入的表格的默认样式
            'table{margin-bottom:10px;border-collapse:collapse;}td{vertical-align:top;padding:2px;height:20px;}'+
            //分页符的样式
            '.pagebreak{border-bottom:1px dotted #999999 !important;border-top:1px dotted #999999 !important;clear:both !important;cursor:default !important;height: 5px !important;padding: 0 !important;width: 100% !important;margin-bottom:10px;height:5px !important;overflow: hidden;}'+
            //锚点的样式,注意这里背景图的路径
            '.anchorclass{background: url("' + URL + 'themes/default/images/anchor.gif") no-repeat scroll left center transparent;border: 1px dotted #0000FF;cursor: auto;display: inline-block;height: 16px;width: 15px;}' +
            //设置四周的留边
            '.view{padding:0;word-wrap:break-word;word-break:break-all;cursor:text;height:100%;}\n' +
            'body{margin:8px;font-family:"宋体";font-size:16px;}' +
            'table{ word-break:break-all;}'+
            //设置段落间距
            'p{margin:.5em 0}'+
            //清除表格浮动状态
            '.tableclear{clear:both;margin:0;padding:0;}'
        ,
        initialContent: '<span style="color:#ccc">欢迎使用ueditor</span>',  //初始化编辑器的内容
        autoClearinitialContent:false,                        //是否自动清除编辑器初始内容
        iframeCssUrl :'themes/default/iframe.css',      //要引入css的url
        removeFormatTags : 'b,big,code,del,dfn,em,font,i,ins,kbd,q,samp,small,span,strike,strong,sub,sup,tt,u,var',    //清除格式删除的标签
        removeFormatAttributes : 'class,style,lang,width,height,align,hspace,valign',                                  //清除格式删除的属性
        enterTag : 'p',                                       //编辑器回车标签。p或br
        maxUndoCount : 20,                                    //最多可以回退的次数
        maxInputCount : 20,                                   //当输入的字符数超过该值时，保存一次现场
        selectedTdClass : 'selectTdClass',                    //设定选中td的样式名称
        pasteplain : false,                                  //是否纯文本粘贴。false为不使用纯文本粘贴，true为使用纯文本粘贴
        textarea : 'editorValue',                             //提交表单时，服务器获取编辑器提交内容的所用的参数，多实例时请给每个实例赋予不同的名字
        focus : false,                                       //初始化时，是否让编辑器获得焦点true或false
        indentValue : '2em',                                  //初始化时，首行缩进距离
        //pageBreakTag : '_baidu_page_break_tag_',              //分页符
		pageBreakTag : '#p#分页标题#e#',  
        minFrameHeight: 320,                                  //最小高度
        autoHeightEnabled:true,                              //是否自动长高
        autoFloatEnabled: true,                              //是否保持toolbar的位置不动
        elementPathEnabled : true,                           //是否启用elementPath
        wordCount:true,                                      //是否开启字数统计
        maximumWords:10000,                                  //允许的最大字符数
        tabSize : 4,                                         //tab的宽度
        tabNode : '&nbsp;',                                  //tab时的单一字符
        imagePopup:true,                                    //图片操作的浮层开关，默认打开
        emotionLocalization:true,                           //是否开启表情本地化，默认关闭。若要开启请确保emotion文件夹下包含官网提供的images表情文件夹
        sourceEditor: "codemirror",                          //源码的查看方式，codermirror 是代码高亮，textarea是文本框
        tdHeight : '60',                                    //单元格的默认高度
        messages:{
            pasteMsg:'编辑器将过滤掉您粘贴内容中的不支持格式！',//粘贴提示
            wordCountMsg:'当前已输入 {#count} 个字符，您还可以输入{#leave} 个字符 ',    //字数统计提示，{#count}代表当前字数，{#leave}代表还可以输入多少字符数。
            wordOverFlowMsg:'你输入的字符个数已经超出最大允许值，服务器可能会拒绝保存！', //超出闲置
            pasteWordImgMsg:'您粘贴的内容中包含本地图片，需要转存后才能正确显示！'
        },
        serialize : function(){                              //配置过滤标签
//            var X = baidu.editor.utils.extend;
//            var inline = {strong:1,em:1,b:1,i:1,u:1,span:1,a:1,img:1};
//            var block = X(inline, {p:1,div:1,blockquote:1,$:{style:1,dir:1}});
            return {
                blackList: {style:1,script:1,link:1,object:1,applet:1,input:1,meta:1,base:1,button:1,select:1,textarea:1,'#comment':1}
//                whiteList: {
//                    div: X(block,{$:{style:1,'class':1}}),
//                    img: {$:{style:1,src:1,title:1,'data-imgref':1, 'data-refid':1, 'class':1}},
//                    a: X(inline, {$:{href:1}, a:0, sup:0}),
//                    strong: inline, em: inline, b: inline, i: inline,
//                    p: block,
//                    span: X(inline, {br:1,$:{style:1,id:1,highlight:1}}
//                }
            };
        }(),
        ComboxInitial: {
            FONT_FAMILY: '字体',
            FONT_SIZE: '字号',
            ROW_SPACING: '行距',
            PARAGRAPH: '段落格式'
        }
    };
})();
