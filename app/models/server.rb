# == Schema Information
#
# Table name: servers
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  admin_id    :integer          not null
#  invite_code :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Server < ApplicationRecord
  validates :name, :admin_id, :invite_code, presence: true

  after_initialize :ensure_invite_code

  has_many :server_memberships
  has_many :members,
    through: :server_memberships,
    source: :user
  belongs_to :admin,
    class_name: :User,
    primary_key: :id,
    foreign_key: :admin_id

  def self.generate_invite_code
    SecureRandom.urlsafe_base64(4)
  end

  def ensure_invite_code
    self.invite_code ||= self.class.generate_invite_code
  end
end
