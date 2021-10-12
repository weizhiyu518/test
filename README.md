## Welcome to GitHub Pages

You can use the [editor on GitHub](https://github.com/weizhiyu518/test/edit/master/README.md) to maintain and preview the content for your website in Markdown files.

Whenever you commit to this repository, GitHub Pages will run [Jekyll](https://jekyllrb.com/) to rebuild the pages in your site, from the content in your Markdown files.

### Markdown

Markdown is a lightweight and easy-to-use syntax for styling your writing. It includes conventions for

```markdown
Syntax highlighted code block

# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```

For more details see [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/).

### Jekyll Themes

Your Pages site will use the layout and styles from the Jekyll theme you have selected in your [repository settings](https://github.com/weizhiyu518/test/settings). The name of this theme is saved in the Jekyll `_config.yml` configuration file.

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://help.github.com/categories/github-pages-basics/) or [contact support](https://github.com/contact) and we’ll help you sort it out.


```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```


```mermaid
          graph LR
          start[开始] --> input[输入A,B,C]
          input --> conditionA{A是否大于B}
          conditionA -- YES --> conditionC{A是否大于C}
          conditionA -- NO --> conditionB{B是否大于C}
          conditionC -- YES --> printA[输出A]
          conditionC -- NO --> printC[输出C]
          conditionB -- YES --> printB[输出B]
          conditionB -- NO --> printC[输出C]
          printA --> stop[结束]
          printC --> stop
          printB --> stop
```

