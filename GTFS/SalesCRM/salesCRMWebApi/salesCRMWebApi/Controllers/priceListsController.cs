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
    public class priceListsController : ApiController
    {
        private GatewaySalesCRMEntities db = new GatewaySalesCRMEntities();

        // GET: api/priceLists
        public IQueryable<priceList> GetpriceLists()
        {
            return db.priceLists;
        }

        // GET: api/priceLists/5
        [ResponseType(typeof(priceList))]
        public IHttpActionResult GetpriceList(int id)
        {
            priceList priceList = db.priceLists.Find(id);
            if (priceList == null)
            {
                return NotFound();
            }

            return Ok(priceList);
        }

        // PUT: api/priceLists/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutpriceList(int id, priceList priceList)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != priceList.id)
            {
                return BadRequest();
            }

            db.Entry(priceList).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!priceListExists(id))
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

        // POST: api/priceLists
        [ResponseType(typeof(priceList))]
        public IHttpActionResult PostpriceList(priceList priceList)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.priceLists.Add(priceList);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = priceList.id }, priceList);
        }

        // DELETE: api/priceLists/5
        [ResponseType(typeof(priceList))]
        public IHttpActionResult DeletepriceList(int id)
        {
            priceList priceList = db.priceLists.Find(id);
            if (priceList == null)
            {
                return NotFound();
            }

            db.priceLists.Remove(priceList);
            db.SaveChanges();

            return Ok(priceList);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool priceListExists(int id)
        {
            return db.priceLists.Count(e => e.id == id) > 0;
        }
    }
}