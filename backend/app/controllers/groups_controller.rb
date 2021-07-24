class GroupsController < ApplicationController

  def index
    # イベントデータの一覧を返す
    render json: Group.all
  end

  def show
    # 指定したidのイベントデータを返す
    render json: Group.find(params[:id])
  end

  def create
    # パラメータの値でイベントデータを作成する
    group = Group.new(group_params)
    if group.save
      render json: group
    else
      render json: group.errors, status: 422
    end
  end

  def update
    # 指定したidのイベントデータの値を更新する
    group= Group.find(params[:id])
    if group.update(group_params)
      render json: group
    else
      render json: group.errors, status: 422
    end
  end

  def destroy
    # 指定したidのイベントデータを削除する
    group = Group.find(params[:id])
    group.destroy!
    render json: group
  end

  private

  def group_params
    params.require(:group).permit(:id, :name, :description, :word)
  end


end
