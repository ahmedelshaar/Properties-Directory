import { Op } from 'sequelize';

class ApiFeatures {
  constructor(query, queryString, option = {}) {
    this.query = query;
    this.queryString = queryString;
    this.option = option;
    this.filter().sort().limitFields().paginate();
  }

  filter() {
    const queryObj = { ...this.queryString };
    const excludedFields = ['page', 'sort', 'limit', 'fields'];
    excludedFields.forEach((el) => delete queryObj[el]);

    // this.option['where'] = {
    //   created_at: {
    //     [Op.like]: `%${queryObj.date}%`,
    //     [Op.gt]: new Date(new Date() - 24 * 60 * 60 * 1000)
    //   }
    // };

    return this;
  }

  sort() {
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(',');
      if (sortBy[1] === 'asc') {
        this.option['order'] = [[sortBy[0], 'ASC']];
      } else {
        this.option['order'] = [[sortBy[0], 'DESC']];
      }
    } else {
      this.option['order'] = [['created_at', 'ASC']];
    }

    return this;
  }

  limitFields() {
    if (this.queryString.fields) {
      this.option.attributes = this.queryString.fields.split(',');
    }

    return this;
  }

  paginate() {
    const page = this.queryString.page * 1 || 1;
    const limit = this.queryString.limit * 1 || 10;

    this.option['offset'] = (page - 1) * limit;
    this.option['limit'] = limit;

    return this;
  }

  async get() {
    const result = await this.query.findAndCountAll(this.option);
    const totalPage = Math.ceil(result.count / this.option.limit);

    return {
      totalPage,
      currentPage: this.queryString.page * 1 || 1,
      data: result.rows,
    };
  }
}

export default ApiFeatures;
