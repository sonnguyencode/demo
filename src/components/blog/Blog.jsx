import React from "react";
import blog from "../../assets/image/blog.png";
import "../../assets/style/blog.scss";

export const Blog = () => {
  return (
    <div className="container-blog">
      <div className="blog">
        <h2>Giới thiệu</h2>
      </div>
      <img className="img-blog" src={blog} alt="" />
      <div>
        <p className="blog-p">
          <span className="praza ">
            PRAZA là thương hiệu túi xách với phong cách thời trang trẻ trung,
            năng động, đã có chỗ đứng nhất định trong lòng người tiêu dùng. Với
            đội ngũ thiết kế trẻ nhiệt huyết, luôn tìm tòi sáng tạo với quan
            niệm đem đến cho khách hang những sự lựa chon đa dạng, hợp thời
            trang, giá cả hợp lý với chất lượng tốt nhất…
          </span>
          
          <span className="praza ">
            Các sản phẩm của PRAZA với phong cách đâm chất Hàn Quốc, cùng với
            chất liệu vải được sản xuất tại Hàn Quốc đa dạng màu sắc, siêu bền.
            Hãy trải nghiệm cùng sản phẩm của chúng tôi để khẳng định bạn là
            người tiêu dùng tinh tế, sành điệu.
          </span>
        
          
          <span className="praza ">
            Chúng tôi luôn quan tâm đến sự hài lòng của khách hàng khi mua sản
            phẩm, do đó có nhiều chế độ hậu mãi hấp dẫn như: Đổi sản phẩm mới
            cho khách hàng trong thời gian bảo hành, sửa các sản phẩm của khách
            hàng đã hết thời gian bảo hành nếu khách hàng có nhu cầu.
          </span>
          
          <span className="praza ">
            PRAZA rất mong muốn và sẵn sàng đón nhận những ý kiến đóng góp của
            khách hàng để chất lượng sản phẩm và chất lượng dịch vụ của chúng
            tôi được nâng, nhằm mục đích phục vụ khách hàng một cách tốt nhất.
          </span>
        </p>
      </div>
    </div>
  );
};
