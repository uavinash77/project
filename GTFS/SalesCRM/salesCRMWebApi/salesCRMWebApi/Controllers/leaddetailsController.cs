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
    public class leaddetailsController : ApiController
    {
        private GatewaySalesCRMEntities db = new GatewaySalesCRMEntities();

        // GET: api/leaddetails
        public IQueryable<leaddetail> Getleaddetails()
        {
            return db.leaddetails;
        }

        // GET: api/leaddetails/5
        [ResponseType(typeof(leaddetail))]
        public IHttpActionResult Getleaddetail(int id)
        {
            leaddetail leaddetail = db.leaddetails.Find(id);
            if (leaddetail == null)
            {
                return NotFound();
            }

            return Ok(leaddetail);
        }

        // PUT: api/leaddetails/5
        [ResponseType(typeof(void))]
        public IHttpActionResult Putleaddetail(int id, leaddetail leaddetail)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != leaddetail.id)
            {
                return BadRequest();
            }

            db.Entry(leaddetail).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!leaddetailExists(id))
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

        // POST: api/leaddetails
        [ResponseType(typeof(leaddetail))]
        public IHttpActionResult Postleaddetail(leaddetail leaddetail)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.leaddetails.Add(leaddetail);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = leaddetail.id }, leaddetail);
        }

        // DELETE: api/leaddetails/5
        [ResponseType(typeof(leaddetail))]
        public IHttpActionResult Deleteleaddetail(int id)
        {
            leaddetail leaddetail = db.leaddetails.Find(id);
            if (leaddetail == null)
            {
                return NotFound();
            }

            db.leaddetails.Remove(leaddetail);
            db.SaveChanges();

            return Ok(leaddetail);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool leaddetailExists(int id)
        {
            return db.leaddetails.Count(e => e.id == id) > 0;
        }
    }
}