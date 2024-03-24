// find
export const getBlogs = ()=>{
  let blogs = [];
  const getBlog = localStorage.getItem("blogs");
  if(getBlog){
    blogs = JSON.parse(getBlog)
  }
  return blogs
}
// save
export const saveBlog=blog=>{
  const blogs = getBlogs()
  const isExist = blogs.find(blogId=>blogId.id===blog.id)
  if(isExist){
    alert("already exist");
  }
  blogs.push(blog)
  localStorage.setItem('blogs',JSON.stringify(blogs))
}
// delete
export const deleteBlog =id=>{
  const blogs = getBlogs();
  const remaining= blogs.filter(b=>b.id!==id);
  localStorage.setItem('blogs',JSON.stringify(remaining))
}