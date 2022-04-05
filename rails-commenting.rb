# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
# creates an association with blog_posts_controller and application
class BlogPostsController < ApplicationController
  def index
    # ---2)
    # creates class index which is the main spot for all blog posts, sort of like a homepage
    @posts = BlogPost.all
  end

  # ---3)
  # creates a class and method that allows the ability to find and show a post but requires a perameter of the blog posts ID
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4)
  # creates a class and methed to be able to add a new post
  def new
    @post = BlogPost.new
  end

  def create
    # ---5)
    # a class that creates a method to add the ability to create a blog post but requires parametes to be done. once submitted it redirects to the post or a new post
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    # ---6)
    # creates a parameter of needing an id in order to find a specific blog post
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)
    # a class which has created a update funtion which has paramters needed to work, along with rediraction after
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8)
      # creates a rediraction action for after you destroy a blog post
      redirect_to blog_post_path(@post)
    end
  end

  # ---9)
  # defines a private instance for the def blog_post_params method
  private
  def blog_post_params
    # ---10)
    # creates a parameter that states a blog post most have a title and content to be permitted
    params.require(:blog_post).permit(:title, :content)
  end
end
