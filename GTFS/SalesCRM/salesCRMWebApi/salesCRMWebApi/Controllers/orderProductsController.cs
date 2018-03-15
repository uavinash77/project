using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using salesCRMWebApi.Models;

namespace salesCRMWebApi.Controllers
{
    public class orderProductsController : ApiController
    {
        private GatewaySalesCRMEntities db = new GatewaySalesCRMEntities();

        // GET: api/orderProducts
        public IQueryable<orderProduct> GetorderProducts()
        {
            return db.orderProducts;
        }

        // GET: api/orderProducts/5
        [ResponseType(typeof(orderProduct))]
        public IHttpActionResult GetorderProduct(int id)
        {
            orderProduct orderProduct = db.orderProducts.Find(id);
            if (orderProduct == null)
            {
                return NotFound();
            }

            return Ok(orderProduct);
        }

        // PUT: api/orderProducts/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutorderProduct(int id, orderProduct orderProduct)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != orderProduct.id)
            {
                return BadRequest();
            }

            db.Entry(orderProduct).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!orderProductExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/orderProducts
        [ResponseType(typeof(orderProduct))]
        public IHttpActionResult PostorderProduct(orderProduct orderProduct)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.orderProducts.Add(orderProduct);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (orderProductExists(orderProduct.id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = orderProduct.id }, orderProduct);
        }

        // DELETE: api/orderProducts/5
        [ResponseType(typeof(orderProduct))]
        public IHttpActionResult DeleteorderProduct(int id)
        {
            orderProduct orderProduct = db.orderProducts.Find(id);
            if (orderProduct == null)
            {
                return NotFound();
            }

            db.orderProducts.Remove(orderProduct);
            db.SaveChanges();

            return Ok(orderProduct);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool orderProductExists(int id)
        {
            return db.orderProducts.Count(e => e.id == id) > 0;
        }
    }
}